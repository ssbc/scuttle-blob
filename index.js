const inject = require('scuttle-inject')
const methods = require('./methods')

const REQUIRED_PLUGINS = ['blobs']

module.exports = inject(methods, REQUIRED_PLUGINS)
