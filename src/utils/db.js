
let mysql = require('mysql')
let connection = null
let logger = require('../mainApp').Logger()

function DbUtil () {}

DbUtil.prototype.execSql = (sql, params, callback) => {

  logger.info('---- execSql ----')
  logger.info(sql + '; params: ' + JSON.stringify(params || {}))

  connection.query(sql, params, (error, results, fields) => {
    if (error) {
      logger.error('---- execSql error ----')
      logger.error(sql + '; params: ' + JSON.stringify(params || {}))
      logger.error(error.message)
    }
    callback && callback(error, results, fields)
  })
}

let db = null

let Init = () => {
  if (!db) {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'pp-tools'
    })

    connection.connect()

    db = new DbUtil()
  }
  return db
}

module.exports = Init()