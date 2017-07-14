import models from '../models';
import * as auth from './authen';

const user = models.user;

/**
 * @exports createUser
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {obj}  newUser object
 */
export const signUp = (req, res) => {
  const username = req.body.username || '';
  const email = req.body.email || '';
  const newUser = user
    .create({
      username: username.toLowerCase().replace(' ', ''),
      email: email.toLowerCase().trim().replace(' ', ''),
      password: auth.generateHash(req.body.password),
      phone: req.body.phone
    })
    .then((result) => {
      const loggedInUser =
        { userId: result.id, username: result.username, email: result.email };

      req.session.user = result;

      res.status(200).send(loggedInUser);
    })
    .catch(() => res.status(400).send({ title: 'Oops...',
      message: 'Error Creating user' }));

  return newUser;
};


/**
 * @exports getUser
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {obj}  newUser object
 */
export const signIn = (req, res) => {
  const username = req.body.username || '';
  const email = req.body.email || '';
  const newUser = user
    .findOne({
      attributes: ['id', 'username', 'email', 'password'],
      where: {
        $or: [
          { username: username.toLowerCase().trim() },
          { email: email.toLowerCase().trim() }
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


/**
 * @exports getAllUsers
 * @param  {obj} req request object
 * @param  {obj} res result object
 * @return {obj}  users object
 */
export const getAllUsers = (req, res) => {
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
export const signOut = (req, res) => {
  if (req.session.user) {
    const username = req.session.user.username;
    req.session.user = null;
    res.status(200).send({ title: 'PostIt bids Goodbye...',
      message: `Thanks for your time ${username.toUpperCase()}...` });
  }
  res.status(200).send({ title: 'Hey!',
    message: 'Sorry, but you are not even logged in!' });
};
