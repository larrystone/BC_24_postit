import express from 'express';

import * as userController from '../../controllers/users';

const user = express.Router();

// define route controllers for creating sign up, login and sign out
user.post('/signin', userController.getUser);
user.post('/signup', userController.createUser);
user.get('/signout', userController.logOut);

// define route controllers for getting all registered users
user.get('/all', userController.getAllUsers);

/**
 * @exports user
 * @return {obj}  null
 */
export default user;
