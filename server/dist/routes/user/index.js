'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controllers = require('../../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = _controllers2.default.users;

var user = _express2.default.Router();

user.post('/signin', userController.getUser);
user.post('/signup', userController.createUser);
user.get('/signout', userController.logOut);

// get all logged in users
user.get('/all', userController.getAllUsers);

module.exports = user;
//# sourceMappingURL=index.js.map