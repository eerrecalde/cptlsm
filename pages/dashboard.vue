<template lang="html">
  <div>
    <h3>EGM Status</h3>
    <v-layout row wrap>
      <v-flex xs12 md9>
        <v-card tile class="card--equal-hight">
          <v-card-title>
            <h5>Funds</h5>
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
            v-bind:headers="ngoFundsHeaders"
            :items="ngoFunds"
            class="elevation-1"
            v-bind:search="search"
            :loading="loadingDataTable"
          >

            <template slot="headerCell" scope="props">
              <span v-tooltip:bottom="{ 'html': props.header.text }">
                {{ props.header.text }}
              </span>
            </template>

            <template slot="items" scope="props">
              <td>{{ props.item.fundName }}</td>
              <td>{{ props.item.group }}</td>
              <td>{{ props.item.registeredMembers }}</td>
            </template>

          </v-data-table>
        </v-card>
      </v-flex>
      <v-flex xs12 md3>
        <v-card tile class="card--equal-hight">
          <v-card-title>
            <h5>EGM trigger</h5>
            <v-spacer></v-spacer>
            <v-icon>assessment</v-icon>
          </v-card-title>

          <div class="card__chart-content">
            <div class="animated-progress__container">
              <div class="animated-progress">
                <div class="animated-progress__bar secondary" :style="{ height: egm_progress + '%' }">{{egm_progress}}%</div>
              </div>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      search: '',
      egm_progress: 30
    }
  },
  methods: {
    fetchNgoFunds (id) {
      return this.$store.dispatch('FETCH_NGO_FUNDS', id)
    },
    fetchNgoFundsHeaders () {
      return this.$store.dispatch('FETCH_NGO_FUNDS_HEADERS')
    }
  },
  computed: {
    loadingDataTable () {
      return (this.ngoFunds && this.ngoFunds.length) ? false : 'secondary'
    },
    ...mapGetters({
      ngoFunds: 'getNgoFunds',
      ngoFundsHeaders: 'getNgoFundsHeaders'
    })
  },
  beforeMount () {
    this.fetchNgoFunds(1)
    this.fetchNgoFundsHeaders()
  }
}
</script>

<style lang="css" scoped>
  .animated-progress__container {
    width: 100%;
    height: 100%;
    border: 16px solid transparent;
    position: absolute;
  }

  .animated-progress {
    background-color: #EEE;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -20px;
    width: 40px;
    height: 100%;
    overflow: hidden;
    border-radius: 3px;
  }

  .animated-progress__bar {
    height: 0%;
    width: 40px;
    color: white;
    text-align: center;
    transition: 1s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .card__chart-content {
    position: relative;
    height: 100%;
  }

  .card {
    display: -webkit-flex;
	  display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .card > div {
    -webkit-flex: auto;
	  flex: auto;
  }

  .card__title{
    height: 80px;
  }

  .card__title > h5 {
    margin-bottom: 0;
  }

  .input-group {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
