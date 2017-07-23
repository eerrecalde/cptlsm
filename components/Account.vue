<template lang="html">
  <div>
    <v-menu
      :close-on-click="true"
      offset-y
    >
      <v-btn class="btn btn--flat white--text" slot="activator">
        <v-icon class="white--text">person</v-icon>Account<v-icon class="white--text">keyboard_arrow_down</v-icon></span>
      </v-btn>
      <v-list two-line subheader>
        <v-subheader>General</v-subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
            <v-list-tile-sub-title>Change your profile's details</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Notifications</v-list-tile-title>
            <v-list-tile-sub-title>Manage your notifications</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list two-line subheader>
        <v-subheader>Dashboard</v-subheader>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Reports</v-list-tile-title>
            <v-list-tile-sub-title>Manage your reports</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<style lang="css">
</style>
