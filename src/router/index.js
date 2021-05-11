import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import About from '@/components/about.vue'
import LandingPage from '@/components/landing-page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
