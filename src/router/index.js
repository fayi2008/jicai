import Vue from 'vue'
import Router from 'vue-router'

import 'swiper/dist/css/swiper.css';
//路由
import index from '../components/index'//首页
import emc from '../components/employeeCare'
import vacation from '../components/vacation'



Vue.use(Router)


//CAL	未封账日历组



export default new Router({

  routes: [
    {
      path: '/vacation',
      name: 'vacation',
      component: vacation
    },
    {
      path: '/emc',
      name: 'emc',
      component: emc
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
