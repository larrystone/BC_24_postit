'use strict';

var _controllers = require('../../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = _controllers2.default.users;

module.exports = function (req, res) {
  // fetch the group id
  var groupId = req.params.groupId * 1;

  // TODO use usrname to fecth userId, then use it to update database
  var userId = req.body.userId;

  res.status(200).json({ message: 'Adding user with id: ' + userId + ' to Groups with id: ' + groupId });
};
//# sourceMappingURL=adduser.js.map