import express from 'express';

import {getUser, createUser, logOut, getAllUsers } from '../../controllers';

const user = express.Router();

// define route controllers for creating sign up, login and sign out
user.post('/signin', getUser);
user.post('/signup', createUser);
user.get('/signout', logOut);

// define route controllers for getting all registered users
user.get('/all', getAllUsers);

/**
 * @exports user
 * @return {obj}  null
 */
export default user;
