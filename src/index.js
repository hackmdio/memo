var ctx = document.getElementById('satisfaction').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    data: {
        labels: ['滿意度'],
        datasets: [{
            label: 'MemoMD',
            backgroundColor: '#1cd1a4',
            borderColor: '#1cd1a4',
            data: [98]
        }, {
          label: 'HackMD',
          backgroundColor: '#1cd1a4)',
          borderColor: '#1cd1a4)',
          data: [75]
      }]
    },

    options: {
      scales: {
        xAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100
            }
        }]
    }
    }
});


var ctx = document.getElementById('usability').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    data: {
        labels: ['易用性'],
        datasets: [{
            label: 'MemoMD',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [100]
        }, {
          label: 'HackMD',
          backgroundColor: 'rgb(255, 99, 132))',
          borderColor: 'rgb(255, 99, 132))',
          data: [150]
      }]
    },

    options: {
      scales: {
        xAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 180
            }
        }]
    }
    }
});


var ctx = document.getElementById('perf').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    data: {
        labels: ['延遲'],
        datasets: [{
            label: 'MemoMD',
            backgroundColor: '#1c64d1',
            borderColor: '#1c64d1',
            data: [5]
        }, {
          label: 'HackMD',
          backgroundColor: '#1c64d1)',
          borderColor: '#1c64d1)',
          data: [0.0001]
      }]
    },

    options: {
      scales: {
        xAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 7
            }
        }]
    }
    }
});
