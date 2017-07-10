import express from 'express';

import createGroup from './creategroup';
import addUser from './adduser';
import postMessage from './postmessage';
import getMessages from './getmessages';

const group = express.Router();

group.post('/', createGroup);
group.post('/:groupId/user', addUser);
group.post('/:groupId/message', postMessage);
group.get('/:groupId/messages', getMessages);

group.post('/*', (req, res) => {
  res.status(404).send('Invalid link');
});

module.exports = group;
