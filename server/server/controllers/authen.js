import bcrypt from 'bcrypt';

module.exports.generateHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

module.exports.verifyHash = (password, hash) => {
  const status = bcrypt.compareSync(password, hash);
  return status;
};


// import jwt from 'jsonwebtoken';

// const secret = 'mysecret';

// module.exports.generateToken = (currentUser) => {
//   const access = 'auth';
//   const token = jwt.sign({ id: currentUser.id, access }, secret, {expiresIn: 24 * 60 * 60})
//   return token;
// };


// module.exports.verifyToken = (token) => {
//   let decoded;
//   token = req.body.token || req.headers.x-auth;
//   try {
//     decoded = jwt.verify(token, secret, (err, decoded) => {
//    return decoded
//   })
//   } catch (e) {
//
//   }

//   return decoded;
// };
