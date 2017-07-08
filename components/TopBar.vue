<template lang="html">
  <div>
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">{{title || 'Default'}}</h2>

      <router-link class="md-button" to="/">Home</router-link>
      <router-link class="md-button" to="/about">About</router-link>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="css">
  .md-button.md-toggle {
    text-decoration: underline;
    color: #FFF;
  }
</style>
