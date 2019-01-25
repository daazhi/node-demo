let express = require('express')
let router = express.Router()

let utils = require('../utils/utils')
let config = require('./router_config')

let logger = require('../utils/log')

let executeSql = require('../utils/db')


let findAll = (req, res, next) => {
  let query = req.query
  let sql = 'select * from user limit 100'
  executeSql(sql, null,(err, result, fields) => {
    if (!err) {
      res.send(utils.ok(result))
    }
  })
}

let findById = (req, res, next) => {
  let query = req.query
  logger.info(`findById, params: ${JSON.stringify(query)}`)

  if (!query || !query.id) {
    res.send(utils.error('参数异常，id为必要参数'))
    return
  }

  let sql = 'select * from user where id = ' + query.id
  executeSql(sql, null,(err, result, fields) => {
    if (err) {
      res.send(utils.error(err.message))
      return
    }
    res.send(utils.ok(result))
  })
}

let save = (req, res, next) => {
  let params = req.body

  if (typeof params !== 'object') {
    res.send(utils.error('参数异常'))
    return
  }

  if (!params.name || !params.gender || !params.age) {
    res.send(utils.error('name、gender或age不能为空'))
    return
  }

  logger.info(`save, params: ${JSON.stringify(params)}`)

  let id = utils.nextId()
  let sqlParams = [id, params.name, params.gender, params.age]
  let sql = 'insert into user(id, name, gender, age) values (?, ?, ?, ?)'
  executeSql(sql, sqlParams, (err, result, fields) => {
    if (err) {
      res.send(utils.error(err.message))
      return
    }
    res.send(utils.ok('success'))
  })
}

let update = (req, res, next) => {
  let params = req.body

  if (typeof params !== 'object') {
    res.send(utils.error('参数异常'))
    return
  }

  if (!params.id) {
    res.send(utils.error('id不能为空'))
    return
  }

  if (!params.name || !params.gender || !params.age) {
    res.send(utils.error('name、gender或age不能为空'))
    return
  }

  logger.info(`update, params: ${JSON.stringify(params)}`)

  let sqlParams = [params.name, params.gender, params.age, params.id]
  let sql = 'update user set name = ?, gender = ?, age = ? where id = ?'
  executeSql(sql, sqlParams, (err, result, fields) => {
    if (err) {
      res.send(utils.error(err.message))
      return
    }
    res.send(utils.ok('success'))
  })
}

let deleteById = (req, res, next) => {
  let params = req.body

  if (typeof params !== 'object') {
    res.send(utils.error('参数异常'))
    return
  }

  if (!params.id) {
    res.send(utils.error('id不能为空'))
    return
  }

  logger.info(`deleteById, params: ${JSON.stringify(params)}`)

  let sql = 'delete from user where id = ' + params.id
  executeSql(sql, null, (err, result, fields) => {
    if (err) {
      res.send(utils.error(err.message))
      return
    }
    res.send(utils.ok('success'))
  })
}

let methodMap = {findAll, findById, save, update, deleteById}

let apis = config.users
apis.map(item => {
  let type = item.type
  let path = item.path
  let key = item.key

  switch (type) {
    case 'get':
      router.get(path, methodMap[key])
      break
    case 'post':
      router.post(path, methodMap[key])
      break
    case 'put':
      router.put(path, methodMap[key])
      break
    case 'delete':
      router.delete(path, methodMap[key])
      break
    default:
      logger.warn('发现不被允许的请求方式')
      break
  }
})

module.exports = router
