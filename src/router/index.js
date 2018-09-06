import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import register from '@/page/register'
import seek from '@/page/seek'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/seek',
      name: 'seek',
      component: seek
    }
  ]
})
