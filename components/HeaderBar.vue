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
        <v-list-tile @click.native.stop="drawer = !drawer" class="text-logo__wrapper">
          <v-list-tile-content>
            <v-list-tile-title>
              <span class="text-logo">CAPITAL<span class="text-logo__subtext">us</span>M</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="lnk in headerMenuList" :key="lnk.text" :to="lnk.linkTo" @click.native.stop="drawer = !drawer" >
          <v-list-tile-content>
            <v-list-tile-title>
              <span v-if="lnk.badge === undefined" class="side-menu-text">{{lnk.text}}</span>
              <span v-else class="side-menu-text side-menu-text--with-badge"><span v-badge="{value: getBadge(lnk.badge), right: true}" class="red--after">{{lnk.text}}</span></span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="blue-grey darken-3" dark>
      <v-toolbar-title>
        <span class="text-logo">CAPITAL<span class="text-logo__subtext">us</span>M</span>
      </v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down">
        <router-link v-for="lnk in headerMenuList" :key="lnk.text" class="btn btn--flat white--text" :class="{'btn--badge-right': lnk.badge !== undefined}" :to="lnk.linkTo">
          <span v-if="lnk.badge === undefined" class="btn__content">{{lnk.text}}</span>
          <span v-else class="btn__content"><span v-badge="{value: getBadge(lnk.badge), right: true}" class="red--after">{{lnk.text}}</span></span>
        </router-link>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <account></account>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

    </v-toolbar>
  </div>
</template>

<script>
import Account from './Account'

export default {
  components: {Account},
  props: ['resolutions', 'messages'],
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      drawer: false,
      drawerRight: true,
      right: null,
      left: null,
      headerMenuList: [
        {
          text: 'resolutions',
          badge: 'resolutions',
          linkTo: '/resolutions'
        },
        {
          text: 'dashboard',
          badge: 'messages',
          linkTo: '/ngo/dashboard/ngoName'
        },
        {
          text: '(signup)',
          linkTo: '/signup'
        }
      ]
    }
  },
  computed: {
    variableLink () {
      let page = ''
      let badgeCount = 0
      if (this.$route.path === '/resolutions') {
        page = 'resolutions'
      } else if (this.$route.path.indexOf('ngo/dashboard') > -1) {
        page = 'messages'
      }

      badgeCount = (this[page]) ? this[page].length : 0

      return {page, badgeCount}
    },
    resolutionsBadge () {
      return (this.resolutions) ? this.resolutions.length : 0
    },
    dashboardBadge () {
      return (this.messages) ? this.messages.length : 0
    },
    badges () {
      return {
        resolutions: (this.resolutions) ? this.resolutions.length : 0,
        messages: (this.messages) ? this.messages.length : 0
      }
    },
    loading () {
      return this.$store.state.ajaxCallInProgress
    }
  },

  methods: {
    getBadge (txt) {
      return this.badges[txt]
    }
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

  .text-logo__wrapper {
    padding-top: 10px;
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

  .badge:after {
    top: -4px;
    right: -27px;
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

  .side-menu-text {
    display: inline-block;
    padding: 10px 0;
    text-transform: uppercase;
  }

  .side-menu-text--with-badge {
    padding-right: 40px;
  }
</style>
