import Vue from 'vue'
import Router from 'vue-router'
import Navigator from '@/pages/normalView'
import Index from '@/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/pages',
      name: 'Navigator',
      component: Navigator
    }
  ]
})
