import Vue from "vue"
import App from "./App.vue"
import router from "../src/router/index"
import 'lib-flexible/flexible.js'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})



