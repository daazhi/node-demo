
let snowflake = require('../libs/BigInt')

let nextId = () => {
  return snowflake.nextId()
}

let lt9 = v => {
  return v > 9 ? v: ('0' + v)
}

let transTime = long => {
  if (!long) return ''

  let date = new Date(long)

  let year = date.getFullYear();
  let month = lt9(date.getMonth() + 1);
  let day = lt9(date.getDate());
  let hour = lt9(date.getHours());
  let minutes = lt9(date.getMinutes());
  let second = lt9(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minutes}:${second}`
}


let ok = r => {
  let map = {code: 0, message: 'success'}
  if (!r) {
    return map
  }

  if (typeof r === 'string') {
    map.message = r
  } else {
    map.data = r
  }
  return map
}

let error = r => {
  let map = {code: -1, message: 'error'}
  if (!r) {
    return map
  }

  if (typeof r === 'string') {
    map.message = r
  }
  return map
}

let utils = {nextId, transTime, ok, error}

module.exports = utils
