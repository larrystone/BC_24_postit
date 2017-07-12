import express from 'express';

import controller from '../../controllers';

const userController = controller.users;

const user = express.Router();

user.post('/signin', userController.getUser);
user.post('/signup', userController.createUser);
user.get('/signout', userController.logOut);

// get all logged in users
user.get('/all', userController.getAllUsers);

module.exports = user;
