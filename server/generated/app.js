'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_express2.default.use('/', _routes2.default);

_express2.default.listen(3000, function () {
    console.log('App is listening on port 3000');
});
//# sourceMappingURL=app.js.map