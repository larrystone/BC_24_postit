import express from 'express';

import * as userController from '../../controllers/users';

const user = express.Router();

// define route controllers for creating sign up, login and sign out
user.post('/signin', userController.signIn);
user.post('/signup', userController.signUp);
user.get('/signout', userController.signOut);

// define route controllers for getting all registered users
user.get('/all', userController.getAllUsers);

/**
 * @exports user
 * @return {obj}  null
 */
export default user;
