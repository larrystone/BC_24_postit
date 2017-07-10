import express from 'express';

import signin  from './signin';
import signup from './signup';

const user = express.Router();

user.post('/signin', signin);
user.post('/signup', signup);

module.exports = user;