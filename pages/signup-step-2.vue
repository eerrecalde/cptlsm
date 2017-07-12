<template lang="html">
  <v-layout>
    <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
      <v-card class="elevation-0">
        <v-card-title primary-title>
          <h2 class="headline mb-0 black--text">Step 2</h2>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
              <span>Confirmation email</span>
              <p>Text describing the initial on-chain creation of your account. <br>Ckicking the link will trigger the creation of on-chain account and assign a #hash</p>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <router-link tag="button" type="button" class="btn primary" to="/signup-step-3">Submit</router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .headline-form {
    text-decoration: underline;
  }
</style>
