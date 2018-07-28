'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChatController = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatController = exports.ChatController = function () {
    function ChatController(app) {
        (0, _classCallCheck3.default)(this, ChatController);

        this.app = app;
    }

    (0, _createClass3.default)(ChatController, [{
        key: 'iniciar',
        value: function iniciar(req, res) {
            res.render('chat', { apelido: '' });
        }
    }, {
        key: 'conectar',
        value: function conectar(req, res) {
            req.assert('apelido', 'Nome ou apelodo é obrigatório.').notEmpty();
            req.assert('apelido', 'Nome ou apelodo deve ter entre 3 e 15 caracteres.').len(3, 15);

            var errors = req.validationErrors();
            if (errors) {
                res.render('index', { errors: errors });
                return;
            }

            var apelido = req.body.apelido;
            this.app.get('io').emit('msgParaoCliente', { msg: apelido + ' comectou-se!', from: 'server' });
            res.render('chat', { apelido: apelido });
        }
    }]);
    return ChatController;
}();