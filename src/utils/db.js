
let mysql = require('mysql')

let logger = require('../utils/log')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node_demo'
})

connection.connect()

let executeSql = (sql, params, callback) => {
  connection.query(sql, params, (error, results, fields) => {
    if (error) {
      logger.error(error.message)
    }
    callback && callback(error, results, fields)
  })
}

module.exports = executeSql