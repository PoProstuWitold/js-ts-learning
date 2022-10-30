const net = require('net')
//command - telnet 127.0.0.1 8081
// chat apps

const server = net.createServer(socket => {
    socket.write('Hello')
    socket.on('data', data => {
        console.log(data.toString())
    })
})

server.listen(8080)