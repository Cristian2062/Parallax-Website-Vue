import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    component: () => import(/* webpackChunkName: "all" */ '../views/All.vue')
  },
  {
    path: '/bennet',
    name: 'Bennet',
    component: () => import(/* webpackChunkName: "bennet" */ '../views/Bennet.vue')
  },
  {
    path: '/xiao',
    name: 'Xiao',
    component: () => import(/* webpackChunkName: "xiao" */ '../views/Xiao.vue')
  },
  {
    path: '/jean',
    name: 'Jean',
    component: () => import(/* webpackChunkName: "jean" */ '../views/Jean.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
