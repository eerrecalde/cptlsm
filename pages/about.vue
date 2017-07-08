<template lang="html">
  <div>
    <h3>Hello About</h3>
    <md-button class="md-raised md-accent">Primary</md-button>

    <highcharts :options="options" ref="highcharts"></highcharts>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Browser market shares at a specific website, 2014'
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
            {
              name: 'Chrome',
              y: 12.8,
              sliced: true,
              selected: true
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
          ]
        }]
      }
    }
  }
}
</script>

<style lang="css">
</style>
