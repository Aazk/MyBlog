const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
})



module.exports = {
  getArticleList (req, res, next) {
    var id = req.query.id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getArticleList
      connection.query(sql, [id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  login (req, res, next) {
    var id = req.body.id
    var password = req.body.password
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getPassword
      connection.query(sql, [id], (err, result) => {
        connection.release()
        if (result[0].password === password) {
          res.json({ status: 200, msg: 'correct', flag: true, role: result[0].role })
        } else {
          res.json({ status: 400, msg: 'password is wrong', flag: false })
        }
      })
    })
  },
  getArticle (req, res, next) {
    var a_id = req.query.a_id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getArticle
      connection.query(sql, [a_id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  getTag (req, res, next) {
    var b_user = req.query.b_user
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getTag
      connection.query(sql, [b_user], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  getTagArti (req, res, next) {
    var c_id = req.query.c_id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getTagArti
      connection.query(sql, [c_id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  },
  getFile (req, res, next) {
    var b_user = req.query.b_user
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getFile
      connection.query(sql, [b_user], (err, result) => {
        var data=[[result[0]]]
        var index=0
        for(let i=1;i<result.length;i++){
          if(data[index][data[index].length-1].year===result[i].year && data[index][data[index].length-1].month===result[i].month){
            data[index].push(result[i])
          }
          else{
            data.push([result[i]])
            index++
          }
        }
        res.json(data)
        connection.release()
      })
    })
  },
  createArticle (req, res, next) {
    var { b_user, title, theme, content } = req.body
    pool.getConnection((err, connection) => {
      var sql = sqlMap.createArticle
      connection.query(sql,[b_user,title,theme,content],(err, result) => {
        connection.release()
        if(result.affectedRows === 1){
          res.json({ status: 200, msg: 'correct', flag: true})
        }
        else {
          res.json({status: 400, msg: 'fail to insert', flag: false })
        }
      })
    })
  },
  getUserInfo (req, res, next) {
    var id = req.query.id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getUserInfo
      connection.query(sql,[id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  }
}
