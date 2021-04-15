import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import NavigationBar from '@/components/navigation-bar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NavigationBar',
      component: NavigationBar
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ]
})
