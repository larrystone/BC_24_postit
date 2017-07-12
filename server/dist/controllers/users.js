'use strict';

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _authen = require('./authen');

var _authen2 = _interopRequireDefault(_authen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = _models2.default.user;

// add a user record to the user table
module.exports.createUser = function (req, res) {
  var newUser = user.create({
    username: req.body.username.toLowerCase(),
    email: req.body.email.toLowerCase(),
    password: _authen2.default.generateHash(req.body.password),
    phone: req.body.phone
  }).then(function (result) {
    var loggedInUser = { userId: result.id, username: result.username, email: result.email };

    // TODO set session
    req.session.user = result;

    res.status(200).send(loggedInUser);
  }).catch(function (error) {
    return res.status(400).send({ title: 'Oops...',
      message: 'Error Creating user. See log below for more info',
      log: error });
  });

  return newUser;
};

// get a user from the users table
module.exports.getUser = function (req, res) {
  var newUser = user.findOne({
    attributes: ['id', 'username', 'email', 'password'],
    where: {
      $or: [{ username: req.body.username.toLowerCase() }, { email: req.body.email.toLowerCase() }]
    }
  }).then(function (result) {
    if (!result) {
      return res.status(404).send({
        message: 'Username or email does not exist!'
      });
    }

    if (_authen2.default.verifyHash(req.body.password, result.password)) {
      // create session
      req.session.user = result;
      return res.status(200).send({ id: result.id,
        username: result.username,
        email: result.email,
        phone: result.phone });
    }
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newUser;
};

// get all users on the users table
module.exports.getAllUsers = function (req, res) {
  var newUser = user.findAll({
    attributes: ['id', 'username', 'email', 'phone']
  }).then(function (result) {
    if (!result) {
      return res.status(404).send({
        message: 'No User Found'
      });
    }

    return res.status(200).send(result);
  }).catch(function (error) {
    return res.status(400).send(error);
  });

  return newUser;
};

module.exports.logOut = function (req, res) {
  req.session.user = null;
  res.status(200).send({ title: 'PostIt bids Goodbye...',
    message: 'Thanks for your time...' });
};
//# sourceMappingURL=users.js.map