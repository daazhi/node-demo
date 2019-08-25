/**
 * 用户管理dao层
 */

let mainApp = require('../../mainApp')
let dbUtils = mainApp.DbUtils()

function Dao () {}

Dao.prototype.findAll = () => {
  return new Promise((resolve, reject) => {
    let sql = 'select * from user limit 100'
    dbUtils.execSql(sql, null,(err, result, fields) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

Dao.prototype.findById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'select * from user where id = ' + id
    dbUtils.execSql(sql, null,(err, result, fields) => {
      if (!err) {
        resolve(result)
      } else {
        reject(err)
      }
    })
  })
}

let dao = null
let Init = () => {
  dao = dao || new Dao()
  return dao
}

module.exports = Init()