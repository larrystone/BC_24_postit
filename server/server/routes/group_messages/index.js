import express from 'express';

import controller from '../../controllers';

const group = express.Router();

const groupController = controller.groups;
const messageController = controller.messages;

group.use('*', (req, res, next) => {
  // check for authentication here
  if (!req.session.user) {
    res.status(401).send({ title: 'Oops..',
      message: 'Sorry, You do not have the permission to view this page!' });
  }

  next();
});

group.post('/', groupController.createGroup);
group.post('/:groupId/user', groupController.addGroupUser);

group.post('/:groupId/message', messageController.createMessage);
group.get('/:groupId/messages', messageController.getGroupMessages);

module.exports = group;
