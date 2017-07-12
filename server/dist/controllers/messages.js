'use strict';

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var message = _models2.default.message;

module.exports.createmessage = function (req, res) {
  var newmessage = message.create({
    name: req.body.name
  }).then(function (result) {
    return res.status(201).send(result);
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newmessage;
};

module.exports.addmessageUser = function (req, res) {
  var newmessage = message.create({
    userid: req.body.uid,
    name: req.body.name
  }).then(function (result) {
    return res.status(201).send(result);
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newmessage;
};
//# sourceMappingURL=messages.js.map