var http = require('http')
var bl = require('bl')

url = process.argv[2]

http.get(url, (res) => {
  res.setEncoding('utf8')
  res.pipe(bl( (err, data) => {
    console.log(data.toString().length)
    console.log(data.toString())
  } ))
})
