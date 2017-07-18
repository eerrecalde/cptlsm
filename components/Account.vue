<template lang="html">
  <div>
    <v-menu
      class="hidden-sm-and-down"
      :close-on-click="true"
      offset-y
    >
      <v-btn class="btn btn--flat white--text" slot="activator">
        <v-icon class="white--text">person</v-icon>Account<v-icon class="white--text">keyboard_arrow_down</v-icon></span>
      </v-btn>
      <v-list>
        <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
          <v-list-tile slot="item">
            <v-list-tile-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          action: 'local_activity',
          title: 'Attractions',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'restaurant',
          title: 'Dining',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        },
        {
          action: 'school',
          title: 'Education',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'directions_run',
          title: 'Family',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'healing',
          title: 'Health',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'content_cut',
          title: 'Office',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'local_offer',
          title: 'Promotions',
          items: [
            { title: 'List Item' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
