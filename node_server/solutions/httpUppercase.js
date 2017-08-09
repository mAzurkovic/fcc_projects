const http = require('http');
const fs = require('fs');
const map = require('through2-map');

var port = process.argv[2]

var server = http.createServer((req, res) => {
  req.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase()
     })).pipe(res)
})

server.listen(port)
