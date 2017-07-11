'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controllers = require('../../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var group = _express2.default.Router();
var groupController = _controllers2.default.groups;

group.use('*', function (req, res, next) {
  // check for authentication here
  if (!req.session.user) {
    res.status(401).send('Unauthorized Request');
  }

  next();
});

group.post('/', groupController.createGroup);
group.post('/:groupId/user', groupController.addGroupUser);

group.post('*', function (req, res) {
  res.status(404).send('Invalid link');
});

module.exports = group;
//# sourceMappingURL=index.js.map