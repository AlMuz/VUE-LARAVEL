import './bootstrap'
import Vue from 'vue'

import Routes from '@/js/routes/routes'

import App from '@/js/views/app.vue'

const app = new Vue({
  el: '#app',
  router: Routes,
  render: h => h(App)
})

export default app;
