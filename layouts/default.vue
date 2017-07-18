<template>
  <v-app id="example-1" standalone>
    <header-bar></header-bar>
    <main>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </main>
    <v-footer class="blue-grey darken-3">
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>
<script>
import HeaderBar from '~/components/HeaderBar'
export default {
  components: {HeaderBar}
}
</script>
