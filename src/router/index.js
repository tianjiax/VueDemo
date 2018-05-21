import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  mode: 'history', //可以是去掉#号
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
