import Vue from 'vue'
import Router from 'vue-router'

//路由
import list1 from '../components/list1'//首页
import list2 from '../components/list2'//首页
import list3 from '../components/list3'//首页
import list4 from '../components/list4'//首页
import list5 from '../components/list5'//首页
import  buy from '../components/buy'//首页
import  buys from '../components/buys'
Vue.use(Router)


//CAL	未封账日历组



export default new Router({

  routes: [

    {
      path: '/',
      name: 'list1',
      component: list1
    },
    {
      path: '/list1',
      name: 'list1',
      component: list1
    },
    {
      path: '/list2',
      name: 'list2',
      component: list2
    },
    {
      path: '/list3',
      name: 'list3',
      component: list3
    },
    {
      path: '/list4',
      name: 'list4',
      component: list4
    },
    {
      path: '/list5',
      name: 'list5',
      component: list5
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/buys',
      name: 'buys',
      component: buys
    }
  ]
})
