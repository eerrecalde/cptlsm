<template lang="html">
  <v-layout>
    <v-flex xs12 sm10 offset-sm1 md6 offset-md3>
      <v-card class="elevation-0">
        <v-card-title primary-title>
          <h2 class="headline mb-0 black--text">Step 1</h2>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field
                name="input-name"
                label="Name"
                prepend-icon="face"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                name="input-surname"
                label="Surname"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                name="input-email"
                label="Email"
                prepend-icon="email"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field
                name="input-supporting-charity-1"
                label="Supporting charity"
                prepend-icon="favorite_border"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                name="input-supporting-charity-2"
                label="Supporting charity"
                prepend-icon="favorite_border"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <router-link tag="button" type="button" class="btn primary" to="/">Cancel</router-link>
          <router-link tag="button" type="button" class="btn primary" to="/signup/step2">Submit</router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style lang="css" scoped>
  .headline-form {
    text-decoration: underline;
  }
</style>
