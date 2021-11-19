import { createRouter, createWebHistory } from 'vue-router'
import Students from '../views/Students.vue'

const routes = [
  {
    path: '/',
    name: 'Students',
    component: Students,

  },
  {
    path: '/teachers',
    name: 'Teachers',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Teachers.vue')
  }
]

const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  
  routes
})

export default router
