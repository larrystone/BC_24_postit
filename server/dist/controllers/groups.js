'use strict';

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var group = _models2.default.group;
var groupUser = _models2.default.group_user;

module.exports.createGroup = function (req, res) {
  var newGroup = group.create({
    name: req.body.name
  }).then(function (result) {
    groupUser.create({
      groupid: result.id,
      userid: req.session.user.id,
      admin: true
    });
    res.status(201).send(result);
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newGroup;
};

module.exports.addGroupUser = function (req, res) {
  var newGroupUser = groupUser.create({
    groupid: req.params.groupId,
    userid: req.body.userid
  }).then(function (result) {
    return res.status(201).send(result);
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newGroupUser;
};
//# sourceMappingURL=groups.js.map