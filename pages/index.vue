<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 md3>
        <v-card tile class="card--equal-hight">
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

          <v-card-actions class="card-actions--bottom">
            <v-btn flat dark secondary>+ Add fund</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card tile>
          <v-card-title>
            <h5>Resolutions <span class="fund-name">{{selectedFund.name}}</span></h5>
          </v-card-title>

          <v-data-table
            v-bind:headers="resolutions.headers"
            :items="resolutions.data[selectedFund.id]"
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
                <v-btn icon class="light-green--text" v-if="props.item.chart" @click.native="() => showChart(props.item.chart.props)" v-tooltip:right="{ 'html': props.item.chart.text }">
                  <v-icon>equalizer</v-icon>
                </v-btn>
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
import chartDefaults from '~/api/chartDefaultsMock'
import { mapGetters } from 'vuex'

export default {
  components: {
    Logo
  },
  data () {
    return {
      items: null,
      chartDefaults: chartDefaults.pie,
      chartOptions: null,
      selectedFund: {
        id: '01',
        name: 'ABC fund'
      }
    }
  },
  methods: {
    onSelectSideItem (id) {
      this.selectedFund.id = id
    },
    showChart (opts) {
      console.log('Chart!!', opts)
      this.chartOptions = Object.assign(this.chartDefaults, opts)
    },
    fetchResolutions () {
      console.log('FETCH RES')
      return this.$store.dispatch('FETCH_RESOLUTIONS')
    },
    fetchFunds () {
      console.log('FETCH FUND')
      return this.$store.dispatch('FETCH_FUNDS')
    }
  },
  computed: mapGetters({
    resolutions: 'getResolutions',
    funds: 'getFunds'
  }),
  beforeMount () {
    this.fetchResolutions()
    this.fetchFunds()
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
table.table tbody tr:hover {
  background: rgba(0,0,0,0.02);
}
.table__overflow.elevation-1 {
  overflow-x: inherit;
  overflow-y: visible;
}
.fund-name {
  font-size: 0.7em;
  color: black;
  margin-left: 1rem;
}
.card--equal-hight {
  height: 100% !important;
}
.card-actions--bottom {
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
}
/*.table.table tbody tr:hover {
  background: rgba(0,0,0,0.05);
}*/
</style>
