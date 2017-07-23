<template>
  <div>
    <h3 class="text-xs-right"><span class="dark primary">NGO Logo</span></h3>
    <v-layout row wrap>
      <v-flex xs12 md3>
        <v-card tile class="card--equal-hight">
          <v-card-title>
            <h5>My Funds</h5>
          </v-card-title>

          <v-list>
            <v-list-tile v-for="fund in funds" :key="fund.id" :disabled="fund.pending">
              <v-list-tile-content @click.prevent="onSelectSideItem(fund)">
                <v-list-tile-title class="menu-button-text" :class="{'active': selectedFund.id === fund.id}">
                  {{fund.name}} <span v-if="fund.pending" class="pending-fund grey--text">(pending)</span>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="selectedFund.id === fund.id">
                <v-icon class="light-green--text">keyboard_arrow_right</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <div class="card-actions--bottom">
            <v-card-actions v-if="createMode">
              <v-flex xs12 sm8>
                <v-text-field
                  name="input-1-3"
                  label="Name"
                  v-model="newFundName"
                  single-line
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm4 v-if="createMode">
                <v-btn small flat @click.native="addNewFund()" :disabled="!newFundName"><v-icon>send</v-icon></v-btn>
              </v-flex>
            </v-card-actions>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click.native="createMode = !createMode" flat dark secondary><v-icon class="light-green--text">add</v-icon>Add fund</v-btn>
            </v-card-actions>
          </div>

        </v-card>
      </v-flex>
      <v-flex>
        <v-card tile>
          <v-card-title>
            <h5>Resolutions <span class="fund-name">{{selectedFund.name}}</span></h5>
            <v-spacer></v-spacer>
            <v-text-field
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
          </v-card-title>

          <v-data-table
            v-bind:headers="resolutionHeaders"
            :items="resolutions"
            class="elevation-1"
            v-bind:search="search"
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
import chartDefaults from '../api/chartDefaultsMock'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      items: null,
      chartDefaults: chartDefaults.pie,
      chartOptions: null,
      search: '',
      selectedFund: {
        id: 1,
        name: 'ABC fund'
      },
      createMode: false,
      newFundName: ''
    }
  },
  methods: {
    onSelectSideItem (fund) {
      if (fund.pending) return
      this.selectedFund.id = fund.id
      this.$store.dispatch('CLEAR_RESOLUTIONS')
      this.fetchResolutions(fund.id)
    },
    showChart (opts) {
      this.chartOptions = Object.assign(this.chartDefaults, opts)
    },
    fetchResolutionHeaders () {
      return this.$store.dispatch('FETCH_RESOLUTION_HEADERS')
    },
    fetchResolutions (id) {
      return this.$store.dispatch('FETCH_RESOLUTIONS', id)
    },
    fetchFunds () {
      return this.$store.dispatch('FETCH_FUNDS')
    },
    addNewFund () {
      console.log('clicked')
      this.$store.dispatch('ADD_FUND', this.newFundName)
      this.newFundName = ''
      this.createMode = false
    }
  },
  computed: {
    ...mapGetters({
      resolutions: 'getResolutions',
      resolutionHeaders: 'getResolutionHeaders',
      funds: 'getFunds'
    })
  },
  beforeMount () {
    this.fetchResolutionHeaders()
    this.fetchResolutions(1)
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
  font-weight: bold;
}

.pending .list__tile:hover {
  background: transparent !important;
}
.pending .list__tile .menu-button-text {
  cursor: default;
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
  padding: 10px;
  margin: 3px;
  font-size: 30px;
  line-height: 16px
}

.fund-name {
  font-size: 0.7em;
  color: black;
  margin-left: 1rem;
}
.card-actions--bottom {
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
}
/*.table.table tbody tr:hover {
  background: rgba(0,0,0,0.05);
}*/
.card__title > h5 {
  margin-bottom: 0;
}
.input-group {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
