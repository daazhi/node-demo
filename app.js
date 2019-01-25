let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let lessMiddleware = require('less-middleware')
let logger = require('morgan')

let indexRouter = require('./src/routes/index')
let usersRouter = require('./src/routes/users')

let app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(lessMiddleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/', usersRouter)

module.exports = app
