import express from 'express';

import users from './../controllers/users';

const user = express.Router();

// define route controllers for creating sign up, login and sign out
user.post('/signin', users.getUser);
user.post('/signup', users.createUser);
user.get('/signout', users.logOut);

// define route controllers for getting all registered users
user.get('/all', users.getAllUsers);

/**
 * @exports user
 * @return {obj}  null
 */
export default user;
