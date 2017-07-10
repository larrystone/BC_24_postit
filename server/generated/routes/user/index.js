'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _signin = require('./signin');

var _signin2 = _interopRequireDefault(_signin);

var _signup = require('./signup');

var _signup2 = _interopRequireDefault(_signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = _express2.default.Router();

user.post('/signin', _signin2.default);
user.post('/signup', _signup2.default);

module.exports = user;
//# sourceMappingURL=index.js.map