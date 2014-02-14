var through = require('through')

module.exports = function map(mapper) {
  var stream, ended, n = 0
  return stream = through(function (data) {
    n++
    mapper(data, function (err, data) {
      if(data) stream.queue(data)
      if(--n) return
      if(ended) stream.queue(null)
    })

  },
  function () {
    if(n) return ended = true
    else  stream.queue(null)
  })
}

