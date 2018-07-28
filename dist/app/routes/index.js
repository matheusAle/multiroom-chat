'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Index = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = exports.Index = function Index(app) {
    (0, _classCallCheck3.default)(this, Index);

    app.get('/', app.controller.index.home);
};