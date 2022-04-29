const KoaRouter = require('koa-router');
const router = new KoaRouter({ prefix: '/user' })
const UserController = require('../../controller/User')

// 注册
router.get('/register', async ctx => {
  ctx.body = 'Hello'
})
// 登录
router.post('/login', async ctx => {
  ctx.body = ctx.request.body;
  // ctx.body = {
  //   code: 0,
  //   result: { a: 1 }
  // }
})


module.exports = router
