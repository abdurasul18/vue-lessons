import Vue from 'vue'
import App from './App.vue'
import ChannelCard from "@/components/cards/ChannelCard.vue";

Vue.component('ChannelCard', ChannelCard)
new Vue({
  render: h => h(App),
}).$mount('#app')
