require('./bootstrap');


//VUE

import VueChatScroll from 'vue-chat-scroll'


import { createApp } from 'vue';
import App from '../vue/App';
window.app = createApp(App);
app.component('v-chat-scroll', VueChatScroll);

window.vm = app.mount('#app');   




/* 
import Vue from 'vue'
import App from '../vue/App.vue'


import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)


new Vue({
  //router,
  //'store': store,
  render: h => h(App),
}).$mount('#app')
 */
