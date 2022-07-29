import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ChannelCard from "@/components/cards/ChannelCard.vue";
import router from './routes'
import store from './store'
import axios from "axios";
// 
import 'swiper/css/swiper.min.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// 
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.prototype.$axios = axios

Vue.component('ChannelCard', ChannelCard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
