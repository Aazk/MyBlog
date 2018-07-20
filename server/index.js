const routerApi = require('./router')
const bodyParser = require('body-parser') // post 数据是需要
const express = require('express')
const cors = require('cors')
const app = express()
const history = require('connect-history-api-fallback');
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};
app.use(allowCrossDomain)
app.use(history({
  rewrites:[{
    from: '/articleList', // 正则或者字符串
    to: '/'}
  ]
}))
app.use(bodyParser.json())
// 设置跨域
//app.use(cors())
// 后端api路由
app.use('/api', routerApi)
// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
