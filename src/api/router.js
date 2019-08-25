/**
 * controller注入
 */

let main = require('../mainApp')

let router = main.Router()
router.use(function(req, res, next) {
  console.log('---- req.header ----')
  console.log(req.headers.token)
  next();
});

main.App().use('/', router)

let routers = [
  './controller/userApi'
]

function Init() {
  for (let router of routers) {
    require(router)
  }
}

module.exports = Init