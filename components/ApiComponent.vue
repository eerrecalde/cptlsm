<template lang="html">
  <div>
    <header-bar :resolutions="resolutions" :messages="messages"></header-bar>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {HeaderBar},
  computed: {
    ...mapGetters({
      resolutions: 'getResolutions',
      messages: 'getNgoFunds'
    })
  },
  methods: {
    test () {},
    ...mapActions({
      fetchNgoFunds: 'FETCH_NGO_FUNDS', // map this.add() to this.$store.dispatch('FETCH_NGO_FUNDS')
      fetchResolutions: 'FETCH_RESOLUTIONS' // map this.add() to this.$store.dispatch('FETCH_NGO_FUNDS')
    })
  },

  mounted () {
    this.fetchNgoFunds(1)
    this.fetchResolutions(1)
  }
}
</script>

<style lang="css">
</style>
