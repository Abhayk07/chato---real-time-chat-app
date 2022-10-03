const socket = io('http://localhost:8000',{transports:['websocket']});

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container')


 var audio = new Audio('ting.mp3');

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position)
    messageContainer.append(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
    if(position == 'left'){
        console.log('sound is playing');
        audio.play();
    }
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
})

const name = prompt('enter name')
socket.emit('new-user-joined', name)


socket.on('user-joined', nam=>{
    append(`${nam} joined the chat`, 'right');
})

socket.on('receive', data=>{
    append(`${data.nam }: ${data.message}`, 'left')
})

socket.on('left', nam=>{
    append(`${nam } left the chat`, 'left');
})