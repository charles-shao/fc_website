$(document).ready(function() {
  data = [
    [0, 0],
    [2.5, 180],
    [5, 216],
    [7.5, 230],
    [10, 216]
  ]

  Highcharts.chart('simulation-chart', {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'Action potency over time'
    },
    subtitle: {
      text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
    },
    xAxis: {
      type: 'linear',
      title: {
        text: 'Encounter Time'
      }
    },
    yAxis: {
      title: {
        text: 'Potency'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    series: [{
      type: 'line',
      name: 'Potency',
      data: data
    }],
    credits: false
  });
});
