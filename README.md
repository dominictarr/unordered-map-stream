# unordered-map-stream

like map-stream except the order is not enforced.

``` js
var map = require('unordered-map-stream')

objectStream.pipe(map(function (data, cb) {
  cb(null, data)
}).pipe(outputStream)

```


## License

MIT
