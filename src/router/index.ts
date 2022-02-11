import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/test',
      component: () => import('../views/test/TestView.vue')
    }
  ]
})

export default router
