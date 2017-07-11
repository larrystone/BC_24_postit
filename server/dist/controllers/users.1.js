'use strict';

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = _models2.default.user;

module.exports.createUser = function (req, res) {
  var newUser = user.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
  }).then(function (result) {
    return res.status(201).send(result);
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newUser;
};

module.exports.getUser = function (req, res) {
  var newUser = user.findOne({
    where: {
      $or: [{ username: req.body.username }, { email: req.body.email }],
      password: req.body.password
    }
  }).then(function (result) {
    if (!result) {
      return res.status(404).send({
        message: 'User Not Found'
      });
    }

    return res.status(200).send(result);
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newUser;
};
//# sourceMappingURL=users.1.js.map