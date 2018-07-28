'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Chat = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chat = exports.Chat = function Chat(app) {
    (0, _classCallCheck3.default)(this, Chat);

    app.get('/chat', function (req, res) {
        return app.controller.chat.iniciar(req, res);
    });
    app.post('/chat', function (req, res) {
        return app.controller.chat.conectar(req, res);
    });
};