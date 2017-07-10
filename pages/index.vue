<template>
  <div>
    <v-layout row wrap justify-space-between>
      <v-flex xs12 md3>
        <v-card tile>
          <v-card-title>
            <h5>My Funds</h5>
          </v-card-title>

          <v-list>
            <v-list-tile v-for="fund in funds" :key="fund.id">
              <v-list-tile-content @click.prevent="onSelectSideItem(fund.id)">
                <v-list-tile-title class="menu-button-text" :class="{'active': selectedFund.id === fund.id}">
                  {{fund.name}}
                  <!-- <a class="btn menu-button" :class="{'btn--active': selectedFund.id === fund.id}" href="" @click.prevent="onSelectSideItem(fund.id)">{{fund.name}}</a> -->
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="selectedFund.id === fund.id">
                <v-icon class="light-green--text">keyboard_arrow_right</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-layout md-align="end" md-vertical-align="end">
            <v-card-actions>
              <v-btn flat dark secondary>+ Add fund</v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card tile>
          <v-card-title>
            <h5>Resolutions - <small><i>{{selectedFund.name}}</i></small></h5>
          </v-card-title>

          <v-data-table
            v-bind:headers="tableHeaders"
            :items="resolutions[selectedFund.id]"
            hide-actions
            class="elevation-1"
          >

            <template slot="headerCell" scope="props">
              <span v-tooltip:bottom="{ 'html': props.header.text }">
                {{ props.header.text }}
              </span>
            </template>

            <template slot="items" scope="props">
              <td>{{ props.item.companyName }}</td>
              <td>
                <span>{{ props.item.resolutionName }}</span>
                <div v-if="props.item.progress" class="animated-progress">
                  <div class="animated-progress__bar secondary" :style="{ width: props.item.progress + '%' }">{{props.item.progress}}%</div>
                </div>
              </td>
              <td class="chart-wrapper">
                <a href="" v-if="props.item.chart" @click.prevent="() => showChart(props.item.chart.props)">{{props.item.chart.text}}</a>
                <v-card class="chart-container" v-if="props.item.chart && chartOptions">
                  <button class="chart-close" @click="chartOptions = null">&times;</button>
                  <highcharts :options="chartOptions" ref="highcharts"></highcharts>
                </v-card>
              </td>
              <td>{{ props.item.support }}</td>
              <td>{{ props.item.origin }}</td>
            </template>

          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  },
  watch: {
    items () {
      console.log('ITEMS CHANGED')
    }
  },
  data () {
    return {
      items: null,
      chartDefaults: {
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
      },
      chartOptions: null,
      tableHeaders: [
        { text: 'Company', value: 'companyName', align: 'left' },
        { text: 'Resolution', value: 'resolutionName', align: 'left' },
        { text: 'Chart', value: 'chart', align: 'left', sortable: false },
        { text: 'Support', value: 'support', align: 'left' },
        { text: 'Origin', value: 'origin', align: 'left' }
      ],
      funds: [
        {
          id: '01',
          name: 'ABC fund'
        },
        {
          id: '02',
          name: 'BCD fund'
        },
        {
          id: '03',
          name: 'CDE fund'
        }
      ],
      selectedFund: {
        id: '01',
        name: 'ABC fund'
      },
      resolutions: {
        '01': [
          {
            companyName: '123 PLC',
            resolutionName: 'Board remuneration',
            support: 'no',
            origin: '123 PLC'
          },
          {
            companyName: '234 INC',
            resolutionName: 'Stop selling infant milk powder in regions with no safe water',
            chart: {
              text: 'see chart',
              props: {
                title: {
                  text: 'Stop selling infant milk powder in regions with no safe water',
                  style: {
                    'fontSize': '15px'
                  }
                },
                series: [{
                  type: 'pie',
                  name: 'Votation status',
                  data: [
                    ['In favour', 50],
                    ['Against', 20],
                    ['Undecided', 10],
                    ['Unanswered', 11]
                  ]
                }]
              }
            },
            progress: '60',
            support: 'yes',
            origin: 'SVCHLD'
          },
          {
            companyName: '345 AG',
            resolutionName: 'Another resolution1',
            progress: '20',
            support: 'pending',
            origin: 'AMNES'
          },
          {
            companyName: '567 SA',
            resolutionName: 'Another resolution2',
            progress: '8',
            support: 'yes',
            origin: 'GRNPC'
          },
          {
            companyName: '789 PLC',
            resolutionName: 'Another resolution3',
            progress: '85',
            support: 'yes',
            origin: 'OXFAM'
          },
          {
            companyName: '910 INC',
            resolutionName: 'Another resolution4',
            progress: '60',
            support: 'yes',
            origin: 'AMNES'
          },
          {
            companyName: '101 AG',
            resolutionName: 'Another resolution5',
            progress: '35',
            support: 'yes',
            origin: 'OXFAM'
          }
        ],
        '02': [
          {
            companyName: '123 PLC',
            resolutionName: 'Board remuneration',
            progress: '50',
            support: 'no',
            origin: '123 PLC'
          },
          {
            companyName: '234 INC',
            resolutionName: 'Stop selling infant milk powder in regions with no safe water',
            progress: '6',
            support: 'yes',
            origin: 'SVCHLD'
          },
          {
            companyName: '345 AG',
            resolutionName: 'Another resolution1',
            progress: '70',
            support: 'pending',
            origin: 'AMNES'
          },
          {
            companyName: '567 SA',
            resolutionName: 'Another resolution2',
            support: 'yes',
            origin: 'GRNPC'
          },
          {
            companyName: '789 PLC',
            resolutionName: 'Another resolution3',
            support: 'yes',
            origin: 'OXFAM'
          },
          {
            companyName: '910 INC',
            resolutionName: 'Another resolution4',
            support: 'yes',
            origin: 'AMNES'
          },
          {
            companyName: '101 AG',
            resolutionName: 'Another resolution5',
            support: 'yes',
            origin: 'OXFAM'
          }
        ],
        '03': [
          {
            companyName: '123 PLC',
            resolutionName: 'Board remuneration',
            progress: '60',
            support: 'no',
            origin: '123 PLC'
          },
          {
            companyName: '234 INC',
            resolutionName: 'Stop selling infant milk powder in regions with no safe water',
            support: 'yes',
            origin: 'SVCHLD'
          },
          {
            companyName: '345 AG',
            resolutionName: 'Another resolution1',
            support: 'pending',
            origin: 'AMNES'
          },
          {
            companyName: '567 SA',
            resolutionName: 'Another resolution2',
            progress: '80',
            support: 'yes',
            origin: 'GRNPC'
          },
          {
            companyName: '789 PLC',
            resolutionName: 'Another resolution3',
            progress: '8',
            support: 'yes',
            origin: 'OXFAM'
          },
          {
            companyName: '910 INC',
            resolutionName: 'Another resolution4',
            support: 'yes',
            origin: 'AMNES'
          },
          {
            companyName: '101 AG',
            resolutionName: 'Another resolution5',
            support: 'yes',
            origin: 'OXFAM'
          }
        ]
      }
    }
  },
  methods: {
    onSelectSideItem (id) {
      console.log('CLICKED', id)
      this.selectedFund.id = id
    },
    showChart (opts) {
      console.log('Chart!!', opts)
      this.chartOptions = Object.assign(this.chartDefaults, opts)
    }
  }
}
</script>

<style css scoped>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
.card__title > h5 {
  margin-bottom: 0;
}
.animated-progress {
  background-color: #EEE;
  margin: 3px 0;
}

.animated-progress__bar {
  width: 0%;
  color: white;
  text-align: center;
  transition: 1s;
}
.menu-button-text.active {
  text-decoration: underline;
}
.chart-wrapper {
  position: relative;
}
.chart-container {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -10px;
  width: 380px;
  height: auto;
  overflow: auto;
}
.chart-close {
  position: relative;
  float: right;
  z-index: 1;
  top: 0;
  right: 0;
  margin: 5px 10px;
  font-size: 30px;
  line-height: 30px
}
.table__overflow.elevation-1 {
  overflow-x: inherit;
  overflow-y: visible;
}
/*.table.table tbody tr:hover {
  background: rgba(0,0,0,0.05);
}*/
</style>
