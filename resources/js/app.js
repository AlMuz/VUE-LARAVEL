import './bootstrap'
import Vue from 'vue'
import VueNoty from 'vuejs-noty'
import wysiwyg from "vue-wysiwyg"

import 'vue-wysiwyg/dist/vueWysiwyg.css';
import 'vuejs-noty/dist/vuejs-noty.css'

import Routes from '@/js/routes/routes'
import store from '@/js/store/'
import i18n from './i18n'

import App from '@/js/views/app.vue'

Vue.use(VueNoty);
Vue.use(wysiwyg, {});

Vue.config.productionTip = false

const authData = localStorage.getItem("auth");

const app = new Vue({
  store,
  i18n,
  el: '#app',
  router: Routes,
  data: {
    auth: authData ? JSON.parse(authData) : {}
  },
  render: h => h(App)
})

export default app;
