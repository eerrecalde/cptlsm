<template lang="html">
  <div>
    <v-text-field
      :name="`search-box-${boxId}`"
      v-model="fl.searchQuery"
      :label="boxPlaceholder || 'Type something...'"
      hide-details
      single-line
      append-icon="search"
      prepend-icon="arrow_back"
      :prepend-icon-cb="onBackEvent"
      type="text"

    ></v-text-field>
    <filtred-list :query="fl.searchQuery" :list="list" class="filtred-list-wrapper">
      <template slot="item" scope="props" ng-if="">
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title @click="onSelectedItemEvent(props.text)">{{ props.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </filtred-list>
  </div>
</template>

<script>
import filtredList from '../components/FiltredList'
export default {
  props: ['list', 'box-id', 'box-placeholder'],
  components: {filtredList},
  data () {
    return {
      fl: {
        list: [],
        searchQuery: ''
      }
    }
  },
  methods: {
    onBackEvent () {
      console.log('BLURRR')
      this.$emit('box-back')
    },
    onSelectedItemEvent (txt) {
      console.log('selected item', txt)
      this.$emit('box-selected-item', txt)
      this.fl.searchQuery = ''
    }
  }
}
</script>

<style lang="css">
  .filtred-list-wrapper {
    margin-top: -18px;
  }
</style>
