import models from '../models';
import auth from './authen';

const user = models.user;

// add a user record to the user table
module.exports.createUser = (req, res) => {
  const newUser = user
    .create({
      username: req.body.username.toLowerCase(),
      email: req.body.email.toLowerCase(),
      password: auth.generateHash(req.body.password),
      phone: req.body.phone
    })
    .then((result) => {
      const loggedInUser =
        { userId: result.id, username: result.username, email: result.email };

      // TODO set session
      req.session.user = result;

      res.status(200).send(loggedInUser);
    })
    .catch(error => res.status(400).send(error));

  return newUser;
};


// get a user from the users table
module.exports.getUser = (req, res) => {
  const newUser = user
    .findOne({
      attributes: ['id', 'username', 'email', 'phone', 'password'],
      where: {
        $or: [
          { username: req.body.username.toLowerCase() },
          { email: req.body.email.toLowerCase() }
        ]
      }
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: 'Username or email does not exist!',
        });
      }

      if (auth.verifyHash(req.body.password, result.password)) {
        // create session
        req.session.user = result;
        return res.status(200).send(
          { id: result.id,
            username: result.username,
            email: result.email,
            phone: result.phone });
      }
    })
    .catch(error => res.status(400).send(error));

  return newUser;
};




// get all users on the users table
module.exports.getAllUsers = (req, res) => {
  const newUser = user
    .findAll({
      attributes: ['id', 'username', 'email', 'phone']
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: 'No User Not Found',
        });
      }

      return res.status(200).send(result);
    })
    .catch(error => res.status(400).send(error));

  return newUser;
};

module.exports.logOut = (req, res) => {
  req.session.user = null;
  res.status(200).send({ message: 'Thanks for using our app' });
};

