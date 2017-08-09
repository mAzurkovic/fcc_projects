var fs = require('fs')

fs.readdir(process.argv[2], (err, data) => {
    var query = '.' + process.argv[3]
    for (var i = 0; i < data.length; i++) {
      if (data[i].indexOf(query) !== -1) {
        console.log(data[i])
      }
    }
})
