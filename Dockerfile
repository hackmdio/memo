FROM node:carbon AS build

WORKDIR /app
COPY . .
# build static pages
RUN npm install && npm run build

FROM nginx:stable
COPY --from=build /app/dist /var/www
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
EXPOSE 80
ENTRYPOINT [ "/docker-entrypoint.sh" ]