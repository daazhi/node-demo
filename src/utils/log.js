let log4js = require("log4js")

let log4js_config = {
  "appenders": {
    "access": {
      "type": "dateFile",
      "filename": "log/access.log",
      "pattern": "-yyyy-MM-dd",
      "category": "http"
    },
    "app": {
      "type": "file",
      "filename": "log/app.log",
      "maxLogSize": 10485760,
      "numBackups": 3
    },
    "errorFile": {
      "type": "file",
      "filename": "log/errors.log"
    },
    "errors": {
      "type": "logLevelFilter",
      "level": "ERROR",
      "appender": "errorFile"
    },
    "console": { "type": "console" }
  },
  "categories": {
    "default": { "appenders": ["console", "app", "errors"], "level": "all" },
    "http": { "appenders": [ "access"], "level": "DEBUG" }
  }
}

log4js.configure(log4js_config)

let logger = log4js.getLogger('file')

console.log('-----------  Log is started!  -----------')

module.exports = logger