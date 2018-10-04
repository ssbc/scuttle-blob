const inject = require('scuttle-inject')
const methods = require('./methods')

const REQUIRED_PLUGINS = ['blobs']

module.exports = function (server) {
  return inject(server, methods, REQUIRED_PLUGINS)
}
