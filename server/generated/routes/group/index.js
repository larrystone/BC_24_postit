'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _creategroup = require('./creategroup');

var _creategroup2 = _interopRequireDefault(_creategroup);

var _signup = require('./signup');

var _signup2 = _interopRequireDefault(_signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = _express2.default.Router();

user.post('/', _creategroup2.default);
user.post('/:groupid/user');

user.post('/', function (req, res) {
  res.status(404).send('Invalid link');
});

module.exports = user;
//# sourceMappingURL=index.js.map