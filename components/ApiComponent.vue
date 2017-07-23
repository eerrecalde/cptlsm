<template lang="html">
  <div>
    <header-bar :resolutions="resolutions" :messages="messages"></header-bar>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar'
import { mapGetters } from 'vuex'
export default {
  components: {HeaderBar},
  computed: {
    ...mapGetters({
      resolutions: 'getResolutions',
      messages: 'getNgoFunds'
    })
  },
  methods: {
    fetchNgoFunds (id) {
      return this.$store.dispatch('FETCH_NGO_FUNDS', id)
    },
    fetchResolutions (id) {
      return this.$store.dispatch('FETCH_RESOLUTIONS', id)
    }
  },
  mounted () {
    this.fetchNgoFunds(1)
    this.fetchResolutions(1)
  }
}
</script>

<style lang="css">
</style>
