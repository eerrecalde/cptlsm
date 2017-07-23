<template>
  <v-app id="example-1" standalone>
    <api-component></api-component>
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
import ApiComponent from '~/components/ApiComponent'
export default {
  components: {ApiComponent}
}
</script>
