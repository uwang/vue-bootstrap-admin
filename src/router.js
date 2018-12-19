import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/layout/Main.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'home' },
      component: Main,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'hello',
          name: 'hello',
          component: () => import(/* webpackChunkName: "hello" */ './views/Hello.vue')
        }
      ]
    },
    {
      path: '/403',
      component: () => import(/* webpackChunkName: "403" */ './views/403.vue')
    },
    {
      path: '/500',
      component: () => import(/* webpackChunkName: "500" */ './views/500.vue')
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue')
    }
  ]
})
