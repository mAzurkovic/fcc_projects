var fs = require('fs')
var buffer = fs.readFileSync(process.argv[2]).toString().split()
var newLines = 0
for (var i = 0; i < buffer[0].length; i++) {
    if (buffer[0][i] == "\n") {
        newLines += 1;
    } 
}
console.log(newLines)