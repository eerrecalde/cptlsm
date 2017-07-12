<template>
  <v-app id="example-1" standalone>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      light
      overflow
      disable-route-watcher
      absolute
    >
      <v-list dense>
        <v-list-tile @click.native.stop="left = !left">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="blue-grey darken-3" dark>
      <v-toolbar-title>
        <span class="text-logo">CAPITAL<span class="text-logo__subtext">us</span>M</span>
        <span class="page-title">{{currentPage}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link tag="button" type="button" class="btn btn--flat secondary secondary--text" to="/"><div class="btn__content">Home</div></router-link>
        <router-link tag="button" type="button" class="btn btn--flat secondary secondary--text" to="/about"><div class="btn__content">About</div></router-link>
        <router-link tag="button" type="button" class="btn btn--flat secondary secondary--text" to="/signup-step-1"><div class="btn__content">Signup</div></router-link>
      </v-toolbar-items>
    </v-toolbar>
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
export default {
  data () {
    return {
      drawer: false,
      drawerRight: true,
      right: null,
      left: null
    }
  },
  computed: {
    currentPage () {
      return (this.$route.path === '/') ? 'HOME' : this.$route.name.toUpperCase()
    }
  },
  mounted () {
    console.log('mounted', this.$route)
  }
}
</script>
<style>

.text-logo {
  font-family: 'Raleway','Open Sans',Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 19px;
  line-height: 21px;
  color: #ffffff;
}

.text-logo__subtext {
  color: #8dc740;
}

.page-title{
  font-size: 18px;
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.page-title::before{
  content: '-';
  margin: 0 15px;
}

.container {
  overflow-y: auto;
}
</style>
