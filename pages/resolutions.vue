<template>
  <div>
    <h3 class='text-xs-right' :class="{'editing': editingNgoName}">
      <span v-if="!editingNgoName" class="dark primary" @dblclick="editName(ngo_name)">{{ngo_name}}</span>
      <input v-if="editingNgoName" class="edit" type="text" v-model="ngo_name" v-ngo-edit-focus="ngo_name == editingNgoName" @blur="doneEdit(ngo_name)" @keyup.enter="doneEdit(ngo_name)" @keyup.esc="cancelEdit(ngo_name)">
    </h3>
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
            <h5>Resolutions <small>({{filtredResolutions.length}})</small> <span class="fund-name">{{selectedFund.name}}</span></h5>
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
            :items="filtredResolutions"
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
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      items: null,
      chartDefaults: chartDefaults.pie,
      chartOptions: null,
      search: '',
      ngo_name: 'NGO Name',
      createMode: false,
      newFundName: '',
      beforeEditingNgoName: null,
      editingNgoName: null,
      selectedFund: {
        id: 1,
        name: 'All resolutions'
      },
      resolutionFilters: []
    }
  },
  methods: {
    onSelectSideItem (fund) {
      this.selectedFund = fund
      this.resolutionFilters = (fund.resolutions) ? fund.resolutions : []
    },
    showChart (opts) {
      this.chartOptions = Object.assign(this.chartDefaults, opts)
    },
    addNewFund () {
      console.log('clicked')
      this.addFund(this.newFundName)
      this.newFundName = ''
      this.createMode = false
    },
    editName (str) {
      this.beforeEditingNgoName = str
      this.editingNgoName = str
    },
    cancelEdit (str) {
      this.editingNgoName = null
      this.ngo_name = this.beforeEditingNgoName
    },
    doneEdit (str) {
      if (!this.editingNgoName) {
        return
      }
      this.editingNgoName = null
      this.ngo_name = this.ngo_name.trim()
    },
    ...mapActions({
      fetchNgoFunds: 'FETCH_NGO_FUNDS', // map this.add() to this.$store.dispatch('FETCH_NGO_FUNDS')
      fetchResolutions: 'FETCH_RESOLUTIONS', // map this.add() to this.$store.dispatch('FETCH_NGO_FUNDS')
      fetchResolutionHeaders: 'FETCH_RESOLUTION_HEADERS',
      fetchFunds: 'FETCH_FUNDS',
      clearResolutions: 'CLEAR_RESOLUTIONS',
      addFund: 'ADD_FUND'
    })
  },
  computed: {
    ...mapGetters({
      resolutions: 'getResolutions',
      resolutionHeaders: 'getResolutionHeaders',
      funds: 'getFunds'
    }),
    filtredResolutions () {
      return (this.resolutionFilters.length)
        ? this.resolutions.filter(el => this.resolutionFilters.indexOf(el.id) > -1)
        : this.resolutions
    }
  },
  beforeMount () {
    this.fetchResolutionHeaders()
    this.fetchResolutions(1)
    this.fetchFunds()
  },

  directives: {
    'ngo-edit-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
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
