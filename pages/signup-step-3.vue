<template lang="html">
  <v-layout>
    <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
      <v-card class="elevation-0">
        <v-card-title primary-title>
          <div>
            <h2 class="headline mb-0 black--text">Step 3</h2>
          </div>
        </v-card-title>
        <v-card-text>
          <p>Welcome John Doe! Please create a password to access your account</p>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field
                name="input-password1"
                label="Repeat password"
                prepend-icon="lock_outline"
                hint="At least 8 characters"
                v-model="inputPassword1"
                min="8"
                :append-icon="showPass1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (showPass1 = !showPass1)"
                :type="!showPass1 ? 'password' : 'text'"
                counter
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                name="input-password2"
                label="Repeat password"
                prepend-icon="lock_outline"
                hint="At least 8 characters"
                v-model="inputPassword2"
                min="8"
                :append-icon="showPass2 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (showPass2 = !showPass2)"
                :type="!showPass2 ? 'password' : 'text'"
                counter
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <router-link tag="button" type="button" class="btn primary" to="/">Submit</router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      showPass1: false,
      showPass2: false,
      inputPassword1: '',
      inputPassword2: ''
    }
  }
}
</script>

<style lang="css" scoped>
  .headline-form {
    text-decoration: underline;
  }
</style>
