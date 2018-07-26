const mysql = require('mysql')
const sqlMap = require('../sqlMap')

module.exports = {
  addTag(req, res, next, pool) {
    var b_user = req.body.b_user
    var title = req.body.title
    pool.getConnection((err, connection) => {
      var sql = sqlMap.addTag
      connection.query(sql, [b_user,title], (err, result) => {
        if (result.affectedRows === 1) {
          res.json({
            status: 200,
            msg: 'correct',
            flag: true
          })
          connection.release()
        }
      })
    })
  },
  delTag(req, res, next, pool) {
    var b_user = req.body.b_user
    var title = req.body.title
    pool.getConnection((err, connection) => {
      var sql = sqlMap.delTag
      connection.query(sql, [title,b_user], (err, result) => {
        if (result.affectedRows === 1) {
          res.json({
            status: 200,
            msg: 'correct',
            flag: true
          })
          connection.release()
        }
      })
    })
  },
  getTag(req, res, next, pool) {
    var b_user = req.query.b_user
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getTag
      connection.query(sql, [b_user], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  getTagArti(req, res, next, pool) {
    var c_id = req.query.c_id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getTagArti
      connection.query(sql, [c_id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
}
