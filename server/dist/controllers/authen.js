'use strict';

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.generateHash = function (password) {
  var salt = _bcrypt2.default.genSaltSync(10);
  var hash = _bcrypt2.default.hashSync(password, salt);

  return hash;
};

module.exports.verifyHash = function (password, hash) {
  var status = _bcrypt2.default.compareSync(password, hash);
  return status;
};

// import jwt from 'jsonwebtoken';

// const secret = 'mysecret';

// module.exports.generateToken = (currentUser) => {
//   const access = 'auth';
//   const token = jwt.sign({ id: currentUser.id, access }, secret)
//     .toString();
//   return token;
// };

// module.exports.verifyToken = (token) => {
//   let decoded;
//   try {
//     decoded = jwt.verify(token, secret)
//   } catch (e) {

//   }

//   return decoded;
// };
//# sourceMappingURL=authen.js.map