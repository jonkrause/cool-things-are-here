import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import desrever from '@/components/desrever'
import zipcoma from '@/components/zipcoma'
import txtreckr from '@/components/txtreckr'
import abutton from '@/components/abutton'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/desrever',
      name: 'desrever',
      component: desrever
    },
    {
      path: '/zipcoma',
      name: 'zipcoma',
      component: zipcoma
    },
    {
      path: '/txtreckr',
      name: 'txtreckr',
      component: txtreckr
    },
    {
      path: '/abutton',
      name: 'abutton',
      component: abutton
    }
  ]
})
