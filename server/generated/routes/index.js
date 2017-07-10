'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express2.default.Router();

routes.get('/', function (req, res) {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
//# sourceMappingURL=index.js.map