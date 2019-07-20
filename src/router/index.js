import Vue from 'vue'
import Router from 'vue-router'

//路由
import list1 from '../components/list1'//首页
import list2 from '../components/list2'//首页
import list3 from '../components/list3'//首页
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
