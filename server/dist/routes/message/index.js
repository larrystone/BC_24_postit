'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controllers = require('../../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageController = _controllers2.default.messages;

var message = _express2.default.Router();

message.use('*', function (req, res, next) {
  // check for authentication here
  if (!req.session.user) {
    res.status(401).send('Unauthorized Request');
  }

  next();
});

message.post('/signin', messageController.getUser);
message.post('/signup', messageController.createUser);
message.get('/signout', messageController.logOut);

message.post('/', function (req, res) {
  res.status(404).send('Invalid link');
});

module.exports = message;
//# sourceMappingURL=index.js.map