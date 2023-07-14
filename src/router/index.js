import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue-use',
    name: 'VueUse',
    component: () => import('../views/VueUse')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
