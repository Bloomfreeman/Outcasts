import { createRouter, createWebHistory } from 'vue-router'
import Feed from '../views/Feed.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'feed',
      component: Feed
    }
  ],
})

export default router
