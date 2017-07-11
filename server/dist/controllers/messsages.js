'use strict';

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var group = _models2.default.group;

module.exports.createGroup = function (req, res) {
  var newGroup = group.create({
    name: req.body.name
  }).then(function (result) {
    return res.status(201).send(result);
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newGroup;
};

module.exports.addGroupUser = function (req, res) {
  var newGroup = group.create({
    userid: req.body.uid,
    name: req.body.name
  }).then(function (result) {
    return res.status(201).send(result);
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newGroup;
};
//# sourceMappingURL=messsages.js.map