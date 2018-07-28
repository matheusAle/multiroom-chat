'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var bodyParser = _interopRequireWildcard(_bodyParser);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _routes = require('../app/routes');

var _indexController = require('../app/controller/indexController');

var _chat = require('../app/routes/chat');

var _chatController = require('../app/controller/chatController');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = exports.app = (0, _express2.default)();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../app/view');

app.use(_express2.default.static(__dirname + '/../app/view/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((0, _expressValidator2.default)());

app.controller = {
    index: new _indexController.IndexController(app),
    chat: new _chatController.ChatController(app)
};

new _routes.Index(app);
new _chat.Chat(app);