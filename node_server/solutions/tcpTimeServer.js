var net = require('net')

var port = process.argv[2]


let date = new Date();
let month = zeroCheck(date.getUTCMonth() + 1);
let monthDate = zeroCheck(date.getDate());
let hours = zeroCheck(date.getHours());
let minutes = zeroCheck(date.getMinutes());

function zeroCheck(moment){
	return moment < 10 ? "0" + moment : moment;
}

let formattedDate = date.getFullYear() + "-" + month  + "-" + monthDate + " " + hours + ":" + minutes ;


var server = net.createServer( (socket) => {
  socket.write(formattedDate);
  socket.end("\n");
})

server.listen(port, () => {
  console.log('listening')
})
