'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IndexController = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexController = exports.IndexController = function () {
    function IndexController() {
        (0, _classCallCheck3.default)(this, IndexController);
    }

    (0, _createClass3.default)(IndexController, [{
        key: 'home',
        value: function home(req, res) {
            res.render('index', { errors: undefined });
        }
    }]);
    return IndexController;
}();