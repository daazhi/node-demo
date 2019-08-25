/**
 * 用户管理service层
 */

let mainApp = require('../../mainApp')
let logger = mainApp.Logger()

let userDao = require('../dao/userDao')

function Service () {}

Service.prototype.findAll = () => {
  return new Promise((resolve, reject) => {
    userDao.findAll().then(data => {
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}

Service.prototype.findById = (id) => {
  return new Promise((resolve, reject) => {
    userDao.findById(id).then(data => {
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}

let service = null
let Init = () => {
  service = service || new Service()
  return service
}

module.exports = Init()