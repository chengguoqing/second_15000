import Vue from 'vue'
import Router from 'vue-router'
import seek_list from '@/page/seek_list'
import register from '@/page/register'
import seek from '@/page/seek'
import seek_list_er from '@/page/seek_list_er'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/seek_list',
            name: 'seek_list',
            component: seek_list
    }, {
            path: '/register',
            name: 'register',
            component: register
    }, {
            path: '/seek',
            name: 'seek',
            component: seek
    }, {
            path: '/seek_list_er',
            name: 'seek_list_er',
            component: seek_list_er
    }
  ]
})
