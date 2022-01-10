const Router = require('koa-router')
const requireDirectory = require('require-directory');
const app = require('../koa')

function visitor (obj) {
  if (obj instanceof Router) {
    app.use(obj.routes())
  }
}

const routes = requireDirectory(module, './routes', { visit: visitor });

module.exports = routes