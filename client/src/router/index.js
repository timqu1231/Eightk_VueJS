import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Eightk from '@/components/Eightk'
import EightkState from '@/components/EightkState'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/eightk',
      name: 'Eightk',
      component: Eightk
    },
    {
      path: '/eightk/:state',
      name: 'EightkState',
      component: EightkState
    }
  ]
})
