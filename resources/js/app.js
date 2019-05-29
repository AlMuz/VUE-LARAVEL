import './bootstrap'
import Vue from 'vue'
import VueNoty from 'vuejs-noty'
import wysiwyg from "vue-wysiwyg"
import 'vue-wysiwyg/dist/vueWysiwyg.css';
import 'vuejs-noty/dist/vuejs-noty.css'

import Routes from '@/js/routes/routes'

import App from '@/js/views/app.vue'

import store from './store'

Vue.use(VueNoty);
Vue.use(wysiwyg, {});

Vue.config.productionTip = false

const authData = localStorage.getItem("auth");

const app = new Vue({
  store,
  el: '#app',
  router: Routes,
  data: {
    auth: authData ? JSON.parse(authData) : {}
  },
  render: h => h(App)
})

export default app;
