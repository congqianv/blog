const KoaRouter = require('koa-router');
const router = new KoaRouter()

// 注册
router.get('/register', async ctx => { })
// 登录
router.post('/login', async ctx => {
  ctx.body = {
    code: 0,
    result: { a: 1 }
  }
})


module.exports = router
