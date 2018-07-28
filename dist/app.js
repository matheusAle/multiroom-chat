'use strict';

var _server = require('./config/server');

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 80;
var server = _server.app.listen(port, function () {
    return console.log('open in ' + port);
});
var io = _socket2.default.listen(server);
_server.app.set('io', io);

io.on('connection', function (socket) {
    socket.on('msgParaOServidor', function (data) {
        socket.emit('msgParaoCliente', data);
        socket.broadcast.emit('msgParaoCliente', data);

        if (parseInt(data.atualizar) == 0) {
            socket.emit('participantesConectados', { apelido: data.from });
            socket.broadcast.emit('participantesConectados', { apelido: data.from });
        }
    });
});