import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'


Vue.config.productionTip = false
Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    light: true,
  },
})

export default new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
