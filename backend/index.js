const app = require('./koa')

// 引入配置文件
const config = require('./config')

// 引入body-paser
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())

// 引入跨域处理
const cors=require('koa-cors')
app.use(cors())

// 引入路由
const router = require('./router')

app.use(ctx => {
  ctx.body = `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div style="padding: 40px">
      <h3 style = 'color: #333'>Request Url: <span style='color: red'>${ctx.originalUrl}</span></h3>
      <h3 style = 'color: #333'>Hello there</h3>
      <h3 style = 'color: #333'>If you see this tip</h3>
      <h3 style = 'color: #333'>Please check the <span style='color:red'>request method</span> or <span style='color:red'>whether the request url is existed</span></h3>
    </div>
  `
})

app.listen(config.server.PORT, () => {
  console.log(`Server is running at http://localhost:${config.server.PORT}`)
})