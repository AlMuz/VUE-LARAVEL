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

const app = new Vue({
  store,
  el: '#app',
  router: Routes,
  render: h => h(App)
})

export default app;
