'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import group from './group';

var routes = _express2.default.Router();

routes.use('/api/user', _user2.default);
// routes.use('/api/group', group);

routes.get('/', function (req, res) {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('*', function (req, res) {
  res.status(404).send('invalid link');
});

module.exports = routes;
//# sourceMappingURL=index.js.map