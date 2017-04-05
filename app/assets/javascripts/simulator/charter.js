$(document).ready(function() {
  data = [
    [2.5, 0.7695],
    [5, 0.7648],
    [7,5, 0.7645],
    [10, 1.7645]
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
      type: 'datetime'
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
