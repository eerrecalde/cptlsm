export default {
  pie: {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Default Title'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        ['Chrome', 12.8],
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
      ]
    }]
  }
}
