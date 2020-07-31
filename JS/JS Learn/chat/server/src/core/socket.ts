import socket from 'socket.io'
import http from 'http'


export default function (http: http.Server) {
  const io = socket(http)

  io.on('connection', function (socket: socket.Socket) {
    console.log(`[connection]: ${socket.id}`)
  })
  return io
}