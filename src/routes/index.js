let express = require('express')
let router = express.Router()

let utils = require('../utils/utils')

let config = require('./router_config')

router.get('/getRouterConfig', function(req, res, next) {
  res.send(utils.ok(config))
})

module.exports = router
