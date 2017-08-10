var express = require('express')
var bodyparser = require('body-parser')

var app = express()

app.set('view engine', 'pug')
//app.set('views', process.argv[3])

//app.use(require('stylus').middleware(process.argv[3]))
app.use(bodyparser.urlencoded({extended: false}))
//app.use(express.static(process.argv[3]))

/*app.get('/', function(req, res) {
  res.end()
})

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})*/

app.post('/form', function(req, res) {
  console.log(req.body.str.split('').reverse().join(''));
  res.send(req.body.str.split('').reverse().join(''))
})

app.put('/message/:id', function(req, res) {
  var id = req.params.id
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.get('/search', function(req, res) {
  res.send(req.query)
})


app.listen(process.argv[2])
