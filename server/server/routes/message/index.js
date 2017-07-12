import express from 'express';

import controller from '../../controllers';

const messageController = controller.messages;

const message = express.Router();

message.use('*', (req, res, next) => {
  // check for authentication here
  if (!req.session.user) {
    res.status(401).send({ title: 'Oops..',
      message: 'Sorry, You do not have the permission to view this page!' });
  }

  next();
});

// message.post('/:groupId/message', messageController.);
// message.get('/:groupId/messages', messageController.);

module.exports = message;
