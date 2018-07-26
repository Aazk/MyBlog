const mysql = require('mysql')
const sqlMap = require('../sqlMap')

module.exports = {
  login(req, res, next, pool) {
    var id = req.body.id
    var password = req.body.password
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getPassword
      connection.query(sql, [id], (err, result) => {
        console.log(err,result)
        if (result[0].password === password) {
          res.json({
            status: 200,
            msg: 'correct',
            flag: true,
            role: result[0].role
          })
        } else {
          res.json({
            status: 400,
            msg: 'password is wrong',
            flag: false
          })
        }
        connection.release()
      })
    })
  },
  getFile(req, res, next, pool) {
    var b_user = req.query.b_user
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getFile
      connection.query(sql, [b_user], (err, result) => {
        var data = [
          [result[0]]
        ]
        var index = 0
        for (let i = 1; i < result.length; i++) {
          if (data[index][data[index].length - 1].year === result[i].year && data[index][data[index].length - 1].month === result[i].month) {
            data[index].push(result[i])
          } else {
            data.push([result[i]])
            index++
          }
        }
        res.json(data)
        connection.release()
      })
    })
  },
  getUserInfo(req, res, next, pool) {
    var id = req.query.id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getUserInfo
      connection.query(sql, [id], (err, result) => {
        res.json(result)
        connection.release()
      })
    })
  }
}


