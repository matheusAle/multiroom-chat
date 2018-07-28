import { app } from './config/server';
import socket from 'socket.io';

const port = process.env.PORT || 80;
const server = app.listen(port, () => console.log(`open in ${port}`));
const io = socket.listen(server);
app.set('io', io);

io.on('connection', (socket) => {    
    socket.on('msgParaOServidor', (data) => {
        socket.emit('msgParaoCliente', data)
        socket.broadcast.emit('msgParaoCliente', data)
        
        if (parseInt(data.atualizar) == 0) {
            socket.emit('participantesConectados', {apelido: data.from })
            socket.broadcast.emit('participantesConectados', {apelido: data.from })
        }
    })
})