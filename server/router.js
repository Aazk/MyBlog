const express = require('express')
const router = express.Router()
const api = require('./api')

router.get('/getArticleList*', (req, res, next) => {
  api.getArticleList(req, res, next)
})

router.get('/getArticle*', (req, res, next) => {
  api.getArticle(req, res, next)
})

router.get('/getTag*', (req, res, next) => {
  api.getTag(req, res, next)
})

router.get('/Tag/getTagArti*', (req, res, next) => {
  api.getTagArti(req, res, next)
})

router.get('/getFile*', (req, res, next) => {
  api.getFile(req, res, next)
})

router.post('/login*', (req, res, next) => {
  api.login(req, res, next)
})

router.get('/test', (req, res, next) => {
  api.test(req, res, next)
})

router.get('/getUserInfo', (req, res, next) => {
  api.getUserInfo(req, res, next)
})

router.post('/createArticle', (req, res, next) => {
  api.createArticle(req, res, next)
})

module.exports = router
