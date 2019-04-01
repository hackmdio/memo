workflow "Build and deploy on push" {
  on = "push"
  resolves = [
    "Setup docker credential",
    "Send Message to slack",
  ]
}

action "Filter master branch" {
  uses = "actions/bin/filter@3c98a2679187369a2116d4f311568596d3725740"
  args = "branch master"
}

action "Build docker image" {
  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  args = ["build", "-t", "memo:master", "."]
  needs = ["Filter master branch"]
}

action "Login gcloud" {
  uses = "actions/gcloud/auth@ba93088eb19c4a04638102a838312bb32de0b052"
  secrets = ["GCLOUD_AUTH"]
  needs = ["Filter master branch"]
}

action "Tag for GCR" {
  uses = "actions/docker/tag@8cdf801b322af5f369e00d85e9cf3a7122f49108"
  args = ["memo:master", "asia.gcr.io/$PROJECT_ID/$APP_NAME"]
  env = {
    PROJECT_ID = "nimble-repeater-208016"
    APP_NAME = "memo"
  }
  needs = ["Build docker image"]
}

action "Setup docker credential" {
  uses = "actions/gcloud/cli@ba93088eb19c4a04638102a838312bb32de0b052"
  args = ["auth", "configure-docker", "--quiet"]
  needs = ["Login gcloud"]
}

action "Push docker image to GCR" {
  uses = "actions/gcloud/cli@ba93088eb19c4a04638102a838312bb32de0b052"
  needs = [
    "Setup docker credential",
    "Tag for GCR",
  ]
  runs = "sh -c -l"
  env = {
    PROJECT_ID = "nimble-repeater-208016"
    APP_NAME = "memo"
  }
  args = ["docker push asia.gcr.io/$PROJECT_ID/$APP_NAME:master"]
}

action "Setup kubectl" {
  uses = "actions/gcloud/cli@ba93088eb19c4a04638102a838312bb32de0b052"
  needs = ["Push docker image to GCR"]
  env = {
    PROJECT_ID = "nimble-repeater-208016"
    CLUSTER_NAME = "hackmd-prod"
    ZONE = "asia-east1-a"
  }
  args = "container clusters get-credentials $CLUSTER_NAME --zone $ZONE --project $PROJECT_ID"
}

action "Deploy to k8s" {
  uses = "docker://gcr.io/cloud-builders/kubectl"
  needs = ["Setup kubectl"]
  runs = "sh -l -c"
  args = ["kubectl -n memo patch deployment memo-landingpage-memo-deploy -p '{\"spec\": {\"template\": {\"metadata\": {\"annotations\": {\"deploy-sha\": \"'${GITHUB_SHA}'\"}}}}}'"]
}

action "Verify Deployment" {
  uses = "docker://gcr.io/cloud-builders/kubectl"
  needs = ["Deploy to k8s"]
  args = ["-n", "memo", "rollout", "status", "deployment/memo-landingpage-memo-deploy"]
}

action "Send Message to slack" {
  uses = "Ilshidur/action-slack@4f4215e15353edafdc6d9933c71799e3eb4db61c"
  needs = ["Verify Deployment"]
  secrets = ["SLACK_WEBHOOK"]
  args = ["MemoMD build success with commit {{ GITHUB_SHA }} ({{ EVENT_PAYLOAD.commits[EVENT_PAYLOAD.commits.length-1].message }})"]
}
