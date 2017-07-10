'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _creategroup = require('./creategroup');

var _creategroup2 = _interopRequireDefault(_creategroup);

var _adduser = require('./adduser');

var _adduser2 = _interopRequireDefault(_adduser);

var _postmessage = require('./postmessage');

var _postmessage2 = _interopRequireDefault(_postmessage);

var _getmessages = require('./getmessages');

var _getmessages2 = _interopRequireDefault(_getmessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var group = _express2.default.Router();

group.post('/', _creategroup2.default);
group.post('/:groupId/user', _adduser2.default);
group.post('/:groupId/message', _postmessage2.default);
group.get('/:groupId/messages', _getmessages2.default);

group.post('/*', function (req, res) {
  res.status(404).send('Invalid link');
});

module.exports = group;
//# sourceMappingURL=index.js.map