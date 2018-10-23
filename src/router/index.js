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

import ff_index from '@/admin/ff_index'
import woderenwu from '@/admin/woderenwu'
import jinxzdrenwu from '@/admin/jinxzdrenwu'
import tijiaorenwu from '@/admin/tijiaorenwu'
import yiwanwc from '@/admin/yiwanwc'
import wodexiaoxi from '@/admin/wodexiaoxi'
import wodexiugaimima from '@/admin/wodexiugaimima'
import woderenwu_xq from '@/admin/woderenwu_xq'
import jinxiangzrw_xq from '@/admin/jinxiangzrw_xq'

import gl_admin_index from '@/gl_admin/index'
import fayizded from '@/gl_admin/fayizded'
import fanyiyuan from '@/gl_admin/fanyiyuan'
import fyxiangq from '@/gl_admin/fyxiangq'
import yiyaunguanli from '@/gl_admin/yiyaunguanli'
import yhguanku from '@/gl_admin/yhguanku'
import test_p from '@/page/test_p' 
import fyxiangq_yonghu from '@/gl_admin/fyxiangq_yonghu'
import glylist_d from '@/gl_admin/glylist_d'
import fyxiangq_gly from '@/gl_admin/fyxiangq_gly'

import fangyi_indx from '@/gl_admin/fangyi_indx'
import feng_xqing from '@/gl_admin/feng_xqing'
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
    }, {
            path: '/ff_index',
            name: 'ff_index',
            component: ff_index
    }, {
            path: '/woderenwu',
            name: 'woderenwu',
            component: woderenwu
    }, {
            path: '/jinxzdrenwu',
            name: 'jinxzdrenwu',
            component: jinxzdrenwu
    }, {
            path: '/tijiaorenwu',
            name: 'tijiaorenwu',
            component: tijiaorenwu
    }, {
            path: '/yiwanwc',
            name: 'yiwanwc',
            component: yiwanwc
    }, {
            path: '/wodexiaoxi',
            name: 'wodexiaoxi',
            component: wodexiaoxi
    }, {
            path: '/wodexiugaimima',
            name: 'wodexiugaimima',
            component: wodexiugaimima
    }, {
            path: '/woderenwu_xq',
            name: 'woderenwu_xq',
            component: woderenwu_xq
    }, {
            path: '/jinxiangzrw_xq',
            name: 'jinxiangzrw_xq',
            component: jinxiangzrw_xq
    }, {
            path: '/gl_admin_index',
            name: 'gl_admin_index',
            component: gl_admin_index
    }, {
            path: '/fayizded',
            name: 'fayizded',
            component: fayizded
    }, {
            path: '/test_p',
            name: 'test_p',
            component: test_p
    }, {
            path: '/fanyiyuan',
            name: 'fanyiyuan',
            component: fanyiyuan
    }, {
            path: '/fyxiangq',
            name: 'fyxiangq',
            component: fyxiangq
    }, {
            path: '/yiyaunguanli',
            name: 'yiyaunguanli',
            component: yiyaunguanli
    }, {
            path: '/yhguanku',
            name: 'yhguanku',
            component: yhguanku
    }, {
            path: '/fyxiangq_yonghu',
            name: 'fyxiangq_yonghu',
            component: fyxiangq_yonghu
    }, {
            path: '/glylist_d',
            name: 'glylist_d',
            component: glylist_d
    }, {
            path: '/fyxiangq_gly',
            name: 'fyxiangq_gly',
            component: fyxiangq_gly
    }, {
            path: '/fangyi_indx',
            name: 'fangyi_indx',
            component: fangyi_indx
    }, {
            path: '/feng_xqing',
            name: 'feng_xqing',
            component: feng_xqing
    }
  ]
})
