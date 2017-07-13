import { user } from '../models';
import { generateHash, verifyHash } from './authen';

/**
 * @exports createUser
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {obj}  newUser object
 */
const createUser = (req, res) => {
  if (!req.session.user) {
    const newUser = user
      .create({
        username: req.body.username.toLowerCase().trim(),
        email: req.body.email.toLowerCase().trim(),
        password: generateHash(req.body.password),
        phone: req.body.phone
      })
      .then((result) => {
        const loggedInUser =
        { userId: result.id, username: result.username, email: result.email };

        req.session.user = result;

        res.status(200).send(loggedInUser);
      })
      .catch(error => res.status(400).send({ title: 'Oops...',
        message: 'Error Creating user. See log below for more info',
        log: error }));

    return newUser;
  }
  res.status(201).send({ title: 'Someone (perhaps you) is already Logged In!',
    message: 'Please log out current user before creating an account!' });
};


/**
 * @exports getUser
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {obj}  newUser object
 */
const getUser = (req, res) => {
  if (!req.session.user) {
    const newUser = user
      .findOne({
        attributes: ['id', 'username', 'email', 'password'],
        where: {
          $or: [
            { username: req.body.username.toLowerCase().trim() },
            { email: req.body.email.toLowerCase().trim() }
          ]
        }
      })
      .then((result) => {
        if (!result) {
          return res.status(404).send({
            message: 'Username or email does not exist!',
          });
        }

        if (verifyHash(req.body.password, result.password)) {
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
  }

  res.status(201).send({ title: 'Someone (perhaps you) is already Logged In!',
    message: 'Please log out current user before logging in as a new user' });
};


/**
 * @exports getAllUsers
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {obj}  users object
 */
const getAllUsers = (req, res) => {
  const users = user
    .findAll({
      attributes: ['id', 'username', 'email', 'phone']
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: 'No User Found',
        });
      }

      return res.status(200).send(result);
    })
    .catch(error => res.status(400).send(error));

  return users;
};

/**
 * @exports logOut
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {obj}  undefined
 */
const logOut = (req, res) => {
  if (req.session.user) {
    const username = req.session.user.username;
    req.session.user = null;
    res.status(200).send({ title: 'PostIt bids Goodbye...',
      message: `Thanks for your time ${username.toUpperCase()}...` });
  }
  res.status(200).send({ title: 'Hey!',
    message: 'Sorry, but you were not logged in the first place!' });
};

export { createUser, getUser, getAllUsers, logOut };
