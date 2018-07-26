const mysql = require('mysql')
const sqlMap = require('../sqlMap')

module.exports = {
  getArticleList(req, res, next, pool) {
    var id = req.query.id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getArticleList
      connection.query(sql, [id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  getArticle(req, res, next, pool) {
    var a_id = req.query.a_id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getArticle
      connection.query(sql, [a_id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  getArticleTag(req, res, next, pool) {
    var a_id = req.query.a_id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getArticleTag
      connection.query(sql, [a_id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  updateArticle(req, res, next, pool) {
    let {
      a_id,
      title,
      markdown,
      html,
      theme
    } = req.body
    pool.getConnection((err, connection) => {
      var sql = sqlMap.updateArticle
      connection.query(sql, [title,markdown,html,theme,a_id], (err, result) => {
        if (result.affectedRows === 1) {
          res.json({
            status: 200,
            msg: 'correct',
            flag: true
          })
        } else {
          res.json({
            status: 400,
            msg: 'fail to insert',
            flag: false
          })
        }
        connection.release()
      })
    })
  },
  updateArticleTag(req, res, next, pool) {
    let {
      tags,
      a_id
    } = req.body
    pool.getConnection((err, connection) => {
      connection.query(sqlMap.delArticleTag, [a_id], (err, result) => {
        for (let i = 0; i < tags.length; i++) {
          let sql = sqlMap.addArticleTag
          connection.query(sql, [a_id, tags[i].c_id], (err, result) => {
          })
        }
        res.json({
          status: 200,
          msg: 'correct',
          flag: true
        })
        connection.release()
      })
    })
  },
  addArticle(req, res, next, pool) {
    var {
      b_user,
      title,
      theme,
      html,
      markdown
    } = req.body
    pool.getConnection((err, connection) => {
      var sql = sqlMap.addArticle
      connection.query(sql, [b_user, title, theme, html,markdown], (err, result) => {
        if (result.affectedRows === 1) {
          connection.query("SELECT @@Identity as a_id",[], (err, result) => {
            res.json(result[0])
          })
        }
        connection.release()
      })
    })
  }
}
