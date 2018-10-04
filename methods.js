const blobFiles = require('ssb-blob-files')

module.exports = {
  async: {
    files: function (server) {
      return function (files, opts, cb) {
        return blobFiles(files, server, opts, cb)
      }
    }
  }
}
