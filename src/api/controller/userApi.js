
let main = require('../../mainApp')
let utils = main.Utils()
let app = main.App()
let router = main.Router()

let userService = require('../service/userService')

router.get('/findAll', (req, res, next) => {
  console.log('---- findAll ----')
  userService.findAll().then(result => {
    res.send(utils.ok(result))
  }).catch(err => {
    res.send(utils.error(err.message))
  })
})

router.get('/findById', (req, res, next) => {
  userService.findById().then(result => {
    res.send(utils.ok(result))
  }).catch(err => {
    res.send(utils.error(err.message))
  })
})

app.use('/user', router)

// let save = (req, res, next) => {
//   let params = req.body
//
//   if (typeof params !== 'object') {
//     res.send(utils.error('参数异常'))
//     return
//   }
//
//   if (!params.name || !params.gender || !params.age) {
//     res.send(utils.error('name、gender或age不能为空'))
//     return
//   }
//
//   logger.info(`save, params: ${JSON.stringify(params)}`)
//
//   let id = utils.nextId()
//   let sqlParams = [id, params.name, params.gender, params.age]
//   let sql = 'insert into user(id, name, gender, age) values (?, ?, ?, ?)'
//   executeSql(sql, sqlParams, (err, result, fields) => {
//     if (err) {
//       res.send(utils.error(err.message))
//       return
//     }
//     res.send(utils.ok('success'))
//   })
// }
//
// let update = (req, res, next) => {
//   let params = req.body
//
//   if (typeof params !== 'object') {
//     res.send(utils.error('参数异常'))
//     return
//   }
//
//   if (!params.id) {
//     res.send(utils.error('id不能为空'))
//     return
//   }
//
//   if (!params.name || !params.gender || !params.age) {
//     res.send(utils.error('name、gender或age不能为空'))
//     return
//   }
//
//   logger.info(`update, params: ${JSON.stringify(params)}`)
//
//   let sqlParams = [params.name, params.gender, params.age, params.id]
//   let sql = 'update user set name = ?, gender = ?, age = ? where id = ?'
//   executeSql(sql, sqlParams, (err, result, fields) => {
//     if (err) {
//       res.send(utils.error(err.message))
//       return
//     }
//     res.send(utils.ok('success'))
//   })
// }
//
// let deleteById = (req, res, next) => {
//   let params = req.body
//
//   if (typeof params !== 'object') {
//     res.send(utils.error('参数异常'))
//     return
//   }
//
//   if (!params.id) {
//     res.send(utils.error('id不能为空'))
//     return
//   }
//
//   logger.info(`deleteById, params: ${JSON.stringify(params)}`)
//
//   let sql = 'delete from user where id = ' + params.id
//   executeSql(sql, null, (err, result, fields) => {
//     if (err) {
//       res.send(utils.error(err.message))
//       return
//     }
//     res.send(utils.ok('success'))
//   })
// }