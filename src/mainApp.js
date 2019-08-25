/**
 * 主程序入口
 */

function MainApp () {}

/**
 * 初始化app
 * @returns {*}
 */
let express = null
MainApp.prototype.Express1 = () => {

  express = express || require('express')

  return express
}

let router = null
MainApp.prototype.Router = function () {
  router = router || this.Express1().Router()
  return router
}

/**
 * 初始化app
 * @returns {*}
 */
let app = null
MainApp.prototype.App = function () {
  if (!app) {

    console.log('-----------  Init app  -----------')

    let path = require('path')
    let cookieParser = require('cookie-parser')
    let lessMiddleware = require('less-middleware')
    let logger = require('morgan')

    app = this.Express1()()

    app.use(logger('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(lessMiddleware(path.join(__dirname, '..', 'public')))
    app.use(express.static(path.join(__dirname, '..', 'public')))

    require('./api/router')()
  }

  return app
}

/**
 * 初始化utils
 * @returns {*}
 */
let utils = null
MainApp.prototype.Utils = () => {
  if (!utils) {

    console.log('-----------  Init Utils  -----------')

    utils = require('./utils/utils')
  }

  return utils
}

/**
 * 初始化db utils
 * @returns {*}
 */
let dbUtils = null
MainApp.prototype.DbUtils = () => {
  if (!dbUtils) {

    console.log('-----------  Init DbUtils  -----------')

    dbUtils = require('./utils/db')
  }

  return dbUtils
}

/**
 * 初始化db utils
 * @returns {*}
 */
let logger = null
MainApp.prototype.Logger = () => {
  if (!logger) {

    console.log('-----------  Init Logger  -----------')

    logger = require('./utils/log')
  }

  return logger
}

let main = null
let Init = () => {
  if (!main) {

    console.log('-----------  Init MainApp  -----------')

    main = new MainApp()
  }
  return main
}

module.exports = Init()