import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
// import 'assets/material.theme.css'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
    color: 'blue-grey',
    hue: '800',
    textColor: 'white'
  },
  accent: {
    color: 'light-green',
    hue: '500',
    textColor: 'black'
  },
  warn: 'red',
  background: 'white'
})
