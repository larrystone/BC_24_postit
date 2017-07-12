'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express2.default.Router();

routes.use('/api/user', _user2.default);
routes.use('/api/group', _group2.default);

routes.get('/', function (req, res) {
  res.status(200).json({ title: 'PostIt!...', message: 'Welcome Buddy...' });
});

routes.get('*', function (req, res) {
  res.status(404).send('invalid link');
});

routes.post('*', function (req, res) {
  res.status(404).send('invalid link');
});

module.exports = routes;
//# sourceMappingURL=index.js.map