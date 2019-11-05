var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            color:'#a6a6a6',
            display: true,
          },
          ticks: {
            fontSize: 15,
            fontColor: 'white'
          }
        }],
        yAxes: [{
          gridLines: {
            color:'#a6a6a6',
            drawBorder: true,
          },
          ticks: {
            beginAtZero: true,
            max: 2020,
            min: 1990,
            stepSize: 5,
            fontSize: 15,
            fontColor: 'white',
            maxTicksLimit: 5,
            padding: 45,
          }
        }]
      },
      tooltips: {
        backgroundColor: 'grey'
      }
    },
    data: {
      labels: ['Birth', 'School','ECCE', 'TUC', ' Bio-engineering Course', 'AFDEMP', 'Military Services'],
    datasets: [{
      data: [1991, 2000, 2007, 2009, 2015, 2016, 2019],
      tension: 0.0,
      borderColor: '#ff9900',
      backgroundColor: 'rgba(0,0,0,0.0)',
      pointBackgroundColor: ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
      pointRadius: 4,
      borderWidth: 2
    }]
  }
});