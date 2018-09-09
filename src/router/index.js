import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import seek_list from '@/page/seek_list'
import seek from '@/page/seek'
import seek_list_er from '@/page/seek_list_er'
import seek_xq from '@/page/seek_xq'
import fuwuliucheng from '@/page/fuwuliucheng'
import yuyuezt from '@/page/yuyuezt'
import jibinfl from '@/page/jibinfl'
import lianxiwomen from '@/page/lianxiwomen'
import user_index from '@/page/user/index'
import wodeyuyue from '@/page/user/wodeyuyue'
import user_yuyue from '@/page/user/user_yuyue'
import user_yuyuezhifu from '@/page/user/user_yuyuezhifu'
import user_scyf from '@/page/user/user_scyf'
import scyy_xq from '@/page/user/scyy_xq'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
    },
        {
            path: '/seek_list',
            name: 'seek_list',
            component: seek_list
    }, {
            path: '/seek',
            name: 'seek',
            component: seek
    }, {
            path: '/seek_list_er',
            name: 'seek_list_er',
            component: seek_list_er
    }, {
            path: '/seek_xq',
            name: 'seek_xq',
            component: seek_xq
    }, {
            path: '/fuwuliucheng',
            name: 'fuwuliucheng',
            component: fuwuliucheng
    }, {
            path: '/yuyuezt',
            name: 'yuyuezt',
            component: yuyuezt
    }, {
            path: '/jibinfl',
            name: 'jibinfl',
            component: jibinfl
    }, {
            path: '/lianxiwomen',
            name: 'lianxiwomen',
            component: lianxiwomen
    }, {
            path: '/user_index',
            name: 'user_index',
            component: user_index
    }, {
            path: '/wodeyuyue',
            name: 'wodeyuyue',
            component: wodeyuyue
    }, {
            path: '/user_yuyue',
            name: 'user_yuyue',
            component: user_yuyue
    }, {
            path: '/user_yuyuezhifu',
            name: 'user_yuyuezhifu',
            component: user_yuyuezhifu
    }, {
            path: '/user_scyf',
            name: 'user_scyf',
            component: user_scyf
    }, {
            path: '/scyy_xq',
            name: 'scyy_xq',
            component: scyy_xq
    }
  ]
})
