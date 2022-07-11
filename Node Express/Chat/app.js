const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

http.listen(8080, () => {
    console.log('Server is running...')
})

app.use('/js', express.static('public'))

io.on('connection', (socket) => {
    console.log('User is connected')

    // io.emit('Houston', 'Hello, welcome to the chat!')
    socket.on('Houston', (chat) => {
        io.emit('Houston', chat)
    })

})

app.get('/chat', (req, res) => {
    
    res.sendFile(__dirname + '/chat.html')
})