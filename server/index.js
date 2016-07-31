'use strict'

import Express from 'express'
import {createServer} from 'http'
import SocketIO from 'socket.io'

const app = Express()
const server = createServer(app)
const io = SocketIO(server)
const port = process.env.PORT || 8081

server.listen(port, () => {
  console.log('Server listening at port %d', port)
})

io.on('connection', (socket) => {

  socket.on('push message', (data) => {

    console.log(`${socket.username} sending ${data}`)
    io.emit('send message', {
      username: socket.username,
      message: data
    })
  })

  socket.on('join channel', (username) => {

    socket.username = username;
    console.log(`${username} is joining chat room`)
    io.emit('join channel', {
      username: socket.username
    })
  })

  socket.on('disconnect', () => {

    console.log(`${socket.username} disconnect`)
    socket.broadcast.emit('left channel', {
      username: socket.username
    });
  });
})
