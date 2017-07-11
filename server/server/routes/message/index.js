import express from 'express';

import controller from '../../controllers';

const messageController = controller.messages;

const message = express.Router();

message.use('*', (req, res, next) => {
  // check for authentication here
  if (!req.session.user) {
    res.status(401).send('Unauthorized Request');
  }

  next();
});

message.post('/:groupId/message', messageController.);
message.get('/:groupId/messages', messageController.);

message.post('/', (req, res) => {
  res.status(404).send('Invalid link');
});

module.exports = message;
