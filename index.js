var request = require('xhr-request')
var assign = require('object-assign')
var ghApiHeaders = require('gh-api-headers')
var noop = function () {}

module.exports = ghApi
module.exports.url = ghApiUrl

function ghApi (api, opt, cb) {
  if (typeof api !== 'string') {
    throw new TypeError('must specify API string')
  }
  api = api.replace(/^\//, '')
  return ghApiUrl('https://api.github.com/' + api, opt, cb)
}

function ghApiUrl (url, opt, cb) {
  if (typeof url !== 'string') {
    throw new TypeError('must specify GitHub URL')
  }

  if (typeof opt === 'function') {
    cb = opt
    opt = {}
  }

  cb = cb || noop
  opt = assign({ json: true }, opt)
  opt.headers = ghApiHeaders(opt)
  return request(url, opt, cb)
}
