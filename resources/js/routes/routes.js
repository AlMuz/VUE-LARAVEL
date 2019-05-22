import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/js/views/Login'
import Signup from '@/js/views/Signup'
import Home from '@/js/views/Home'

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  },{
    path: '/login',
    component: Login
  },{
    path: '/signup',
    component: Signup
  }]
})

export default Router;
