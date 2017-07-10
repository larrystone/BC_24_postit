import express from 'express';

import createGroup from './creategroup';

import signup from './signup';

const user = express.Router();

user.post('/', createGroup);
user.post('/:groupid/user', )

user.post('/', (req, res) => {
  res.status(404).send('Invalid link');
});

module.exports = user;
