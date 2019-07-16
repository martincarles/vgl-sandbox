import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {title: 'Home'},
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {title: 'About'},
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/test1',
      name: 'Test1',
      meta: {title: 'Test1'},
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Test1.vue')
      }
    },
    {
      path: '/test2',
      name: 'Test2',
      meta: {title: 'Test2'},
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Test2.vue')
      }
    },
    {
      path: '/test3',
      name: 'Test3',
      meta: {title: 'Test3'},
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Test3.vue')
      }
    }
  ]
})
