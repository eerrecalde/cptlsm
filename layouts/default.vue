<template>
  <v-app id="example-1" standalone>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      dark
      class="primary"
      overflow
      disable-route-watcher
      absolute
    >
      <v-list dense class="primary">
        <v-list-tile @click.native.stop="left = !left">
          <v-list-tile-content>
            <v-list-tile-title>
              <span class="text-logo">CAPITAL<span class="text-logo__subtext">us</span>M</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.native.stop="left = !left">
          <v-list-tile-content>
            <v-list-tile-action>
              <router-link class="btn btn--flat white--text" :class="{'light-green--text': currentPage === 'HOME'}" to="/"><span class="btn__content">Home</span></router-link>
            </v-list-tile-action>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.native.stop="left = !left">
          <v-list-tile-content>
            <v-list-tile-action>
              <router-link class="btn btn--flat white--text" to="/"><span class="btn__content">Profile</span></router-link>
            </v-list-tile-action>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.native.stop="left = !left">
          <v-list-tile-content>
            <v-list-tile-action>
              <router-link v-if="variableLink.page" class="btn--badge-right btn btn--flat white--text" to="/"><span class="btn__content"><span v-badge="{value: variableLink.badgeCount, right: true}" class="red--after">{{variableLink.page}}</span></span></router-link>
            </v-list-tile-action>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="blue-grey darken-3" dark>
      <v-toolbar-title>
        <span class="text-logo">CAPITAL<span class="text-logo__subtext">us</span>M</span>
        <!-- <span class="page-title">{{currentPage}}</span> -->
      </v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down">
        <router-link class="btn btn--flat white--text" :class="{'light-green--text': currentPage === 'HOME'}" to="/"><span class="btn__content">Home</span></router-link>
        <router-link class="btn btn--flat white--text" to="/"><span class="btn__content">Profile</span></router-link>
        <router-link v-if="variableLink.page" class="btn--badge-right btn btn--flat white--text" to="/"><span class="btn__content"><span v-badge="{value: variableLink.badgeCount, right: true}" class="red--after">{{variableLink.page}}</span></span></router-link>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

      <v-menu
        class="hidden-sm-and-down"
        transition="slide-y-transition"
        offset-y
      >
        <v-btn class="btn btn--flat white--text" slot="activator">
          <v-icon class="white--text">person</v-icon>Account<v-icon class="white--text">keyboard_arrow_down</v-icon></span>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Item 1</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Item 2</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Item 3</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
import { mapGetters } from 'vuex'
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
      return (this.$route.path === '/') ? 'HOME' : (this.$route.name) ? this.$route.name.toUpperCase() : ''
    },
    variableLink () {
      let page = ''
      let badgeCount = 0
      if (this.$route.path === '/') {
        page = 'resolutions'
      } else if (this.$route.path.indexOf('ngo/dashboard') > -1) {
        page = 'messages'
      }

      badgeCount = (this[page]) ? this[page].length : 0

      return {page, badgeCount}
    },
    ...mapGetters({
      resolutions: 'getResolutions',
      messages: 'getMessages'
    })
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
.toolbar__items .btn:first-child {
  margin-left: 20px;
}
.btn--badge-right .btn__content {
  padding-right: 40px;
}

.btn--badge-right .btn__content .badge:after {
  top: -2px;
  right: -25px;
}
</style>
