import express from 'express';

import controller from '../../controllers';

const userController = controller.users;

const user = express.Router();

user.post('/signin', userController.getUser);
user.post('/signup', userController.createUser);
user.get('/signout', userController.logOut);

user.post('/', (req, res) => {
  res.status(404).send('Invalid link');
});

module.exports = user;
