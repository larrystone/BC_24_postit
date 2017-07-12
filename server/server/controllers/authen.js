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
