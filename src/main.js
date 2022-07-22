import Vue from 'vue'
import App from './App.vue'
import ChannelCard from "@/components/cards/ChannelCard.vue";
import router from './routes'


Vue.component('ChannelCard', ChannelCard)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
