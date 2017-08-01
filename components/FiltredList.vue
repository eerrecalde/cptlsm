<template lang="html">
  <div class="list-wrapper">
    <v-card class="list-container">
      <v-list v-if="processedList.length" subheader>
        <slot name="item"
          v-for="item in processedList"
          :text="item.name">
          <!-- fallback content here -->
        </slot>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['query', 'list'],
  data () {
    return {
      model: this.value,
      processedList: []
    }
  },
  watch: {
    query (value) {
      this.processedList = this.processList(value)
      this.$emit('onListFiltred', this.processedList)
    }
  },
  methods: {
    processList (query) {
      if (!this.list || !this.list.length || query === '') return []

      return this.list.filter(el => {
        let keys = Object.keys(el)
        let counter = 0
        keys.forEach(k => {
          if (typeof el[k] === 'string') {
            if (el[k].toLowerCase().indexOf(query.toLowerCase()) > -1) counter += 1
          } else {
            counter += (el[k] === query) ? 1 : 0
          }
        })
        return counter > 0
      })
    }
  }
}
</script>

<style lang="css">
.floating-menu {
  list-style-type: none;
  position: absolute;
  top: 0;
  right: 0;
  max-height: 300px;
  overflow: auto;
  font-size: 1rem;
}
.list-container {
  position: absolute;
  z-index: 2;
  width: 100%;
  max-height: 300px;
  overflow: auto;
}
.list-wrapper {
  position: relative;
}
</style>
