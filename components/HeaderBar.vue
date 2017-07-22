<template lang="html">
  <div>
    <v-progress-linear v-if="loading" :indeterminate="true" color-back="light-green darken-3"></v-progress-linear>
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

      <account></account>
    </v-toolbar>
  </div>
</template>

<script>
import Account from './Account'
import { mapGetters } from 'vuex'
export default {
  components: {Account},
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
    loading () {
      return this.$store.state.ajaxCallInProgress
    },
    ...mapGetters({
      resolutions: 'getResolutions',
      messages: 'getMessages'
    })
  }
}
</script>

<style lang="css">
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

  .progress-linear {
    margin: 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .progress-linear .progress-linear__bar__indeterminate:before, .progress-linear .progress-linear__bar__indeterminate:after {
    background: #8DC740;
  }
</style>
