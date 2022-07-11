const chatTextbox = document.getElementById('chatTextbox')
const usernameText = document.getElementById('username')
const sendMsgButton = document.getElementById("sendMsgButton")
const messagesUL = document.getElementById('messagesUL')

sendMsgButton.addEventListener('click', function () {

    const username = usernameText.value
    const chatText = chatTextbox.value

    const chat = {message: chatText, username: username}

    socket.emit('Houston', chat)
})

socket.on('Houston', (chat) => {
    // console.log('client receiving message')
    const messageItem = `<li>${chat.username}: ${chat.message}`

    messagesUL.insertAdjacentHTML('beforeend', messageItem)
    
})