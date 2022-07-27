import Vue from 'vue'
import App from './App.vue'
import ChannelCard from "@/components/cards/ChannelCard.vue";
import router from './routes'
import store from './store'
import axios from "axios";
import 'swiper/css/swiper.min.css'
Vue.prototype.$axios = axios

Vue.component('ChannelCard', ChannelCard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
