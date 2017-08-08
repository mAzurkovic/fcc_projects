var fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err;
    var buffer = data.toString().split()
    var newLines = 0
    for (var i = 0; i < buffer[0].length; i++) {
        if (buffer[0][i] == "\n") {
            newLines += 1;
        }
    }
    console.log(newLines)
})
