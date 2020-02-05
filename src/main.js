import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

const socket = io('http://192.168.179.25:30114');

Vue.use(VueSocketIOExt, socket);

new Vue({
  render: h => h(App),
}).$mount('#app')
