var http = require('http')
var bl = require('bl')

urlOne = process.argv[2]
urlTwo = process.argv[3]
urlThree = process.argv[4]

returnOne = ''
returnTwo = ''
returnThree = ''

http.get(urlOne, (res) => {
  res.setEncoding('utf8')
  res.pipe(bl( (err, data) => {
    returnOne += data.toString()
  } ))
  res.on('end', () => {
    console.log(returnOne)

    http.get(urlTwo, (res) => {
      res.setEncoding('utf8')
      res.pipe(bl( (err, data) => {
        returnTwo += data.toString()
      } ))
      res.on('end', () => {
        console.log(returnTwo)

        http.get(urlThree, (res) => {
          res.setEncoding('utf8')
          res.pipe(bl( (err, data) => {
            returnThree += data.toString()
          } ))
          res.on('end', () => {
            console.log(returnThree)


          })
        })
      })
    })
  })
})
