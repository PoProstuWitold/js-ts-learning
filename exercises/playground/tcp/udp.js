const dgram = require('dgram')
// command - echo "hi" | nc -w1 -u 127.0.0.1 8081 netcat like app required
// video, media streaming

const socket = dgram.createSocket('udp4')
socket.on('message', (msg, rinfo) => {
    console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
})

socket.bind(8081)