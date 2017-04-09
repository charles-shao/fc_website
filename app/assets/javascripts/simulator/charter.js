function Charter() {
  var options = {
    chart: { zoomType: 'x' },
    title: { text: 'Action potency over time' },
    xAxis: {
      type: 'linear',
      title: { text: 'Encounter Time' }
    },
    yAxis: { title: { text: 'Potency' } },
    legend: { enabled: false },
    plotOptions: { },
    series: [{
      type: 'spline',
      name: 'Potency',
      data: []
    }],
    credits: false
  }

  this.init = function() {
    return Highcharts.chart('simulation-chart', options);
  }
}
