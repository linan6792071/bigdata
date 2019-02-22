import Vue from 'vue'
import Router from 'vue-router'
import CarIntenet from '../pages/CarIntenet'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CarIntenet',
      component: CarIntenet
    }
  ]
})
