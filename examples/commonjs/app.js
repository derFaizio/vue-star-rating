import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import Review from '../../src/review.vue'

Vue.use(Vuetify)
Vue.component('review', Review)

new Vue({
  render: h => h(App)
}).$mount("#app")