/**
 * 工具类
 * author: zhangcz
 * creteDate: 2019/08/25
 */

function Utils () {}

/**
 * BigInt类型的ID
 * @returns {*}
 */
let snowflake = null
Utils.prototype.nextId = () => {
  snowflake = snowflake || require('../libs/big-int')
  return snowflake.nextId()
}

// 不足两位，左补零
let lt9 = v => {
  return v > 9 ? v: ('0' + v)
}

/**
 * 时间转换：毫秒数转换为日期（yyyy-MM-dd HH:mm:ss）
 * @param long
 * @returns {string}
 */
Utils.prototype.transTime = long => {
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

/**
 * 接口返回成功数据
 * @param result
 * @returns {object}
 */
Utils.prototype.ok = result => {
  let map = {code: 0, message: 'success'}

  if (typeof result === 'string') {
    map.message = result
  } else {
    map.data = result || {}
  }
  return map
}

/**
 * 接口返回失败数据
 * @param errMsg
 * @returns {object}
 */
Utils.prototype.error = errMsg => {
  let map = {code: -1, message: errMsg || 'error'}
  return map
}

let utils = null

let Init = () => {
  utils = utils || new Utils()
  return utils
}

module.exports = Init()