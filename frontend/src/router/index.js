import { createRouter, createWebHistory } from 'vue-router'
import routes from './routers'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach(async (to, from, next) => {
//   const access = await canUserAccess(to)
//   if (to.name !== 'Login' && !access) {
//     next({ name: 'Login' })
//     return
//   }
//   next()
// })

// function canUserAccess (to) {
//   const token = localStorage.getItem('token')
//   return !!token
// }

export default router