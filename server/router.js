const mysql = require('mysql')
const express = require('express')
const router = express.Router()
const api = require('./api')
const dbConfig = require('./db')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true // 多语句查询
})

router.get('/getArticleList*', (req, res, next) => {
  api.article.getArticleList(req, res, next, pool)
})

router.get('/getArticle*', (req, res, next) => {
  api.article.getArticle(req, res, next, pool)
})

router.get('/article/Tag*', (req, res, next) => {
  api.article.getArticleTag(req, res, next, pool)
})

router.post('/addArticle', (req, res, next) => {
  api.article.addArticle(req, res, next, pool)
})

router.post('/article/updateArticle', (req, res, next) => {
  api.article.updateArticle(req, res, next, pool)
})

router.post('/article/updateTag', (req, res, next) => {
  api.article.updateArticleTag(req, res, next, pool)
})

router.get('/getTag*', (req, res, next) => {
  api.tag.getTag(req, res, next, pool)
})

router.get('/tag/getTagArti*', (req, res, next) => {
  api.tag.getTagArti(req, res, next, pool)
})

router.post('/tag/addTag', (req, res, next) => {
  api.tag.addTag(req, res, next, pool)
})

router.post('/tag/delTag', (req, res, next) => {
  api.tag.delTag(req, res, next, pool)
})

router.get('/getFile*', (req, res, next) => {
  api.other.getFile(req, res, next, pool)
})

router.post('/login*', (req, res, next) => {
  api.other.login(req, res, next, pool)
})

router.get('/getUserInfo', (req, res, next) => {
  api.other.getUserInfo(req, res, next, pool)
})


module.exports = router
