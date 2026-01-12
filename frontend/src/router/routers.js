const routes = [
  {
    path: '/',
    name: "Home",
    meta: {
      title: "首页"
    },
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/login',
    name: "Login",
    meta: {
      title: "登录"
    },
    component: () => import('@/pages/login/login.vue')
  }
]

export default routes