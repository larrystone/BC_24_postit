import express from 'express';
// import { groups, messages } from '../../controllers';
import groupController from '../controllers/groups';
import messageController from '../controllers/messages';

const groupAndMessage = express.Router();

// const groupController = controller.groups;
// const messageController = controller.messages;

// define authentication middleware for route protection
groupAndMessage.use('*', (req, res, next) => {
  // check for authentication here
  if (!req.session.user) {
    res.status(401).send({ title: 'Oops..',
      message: 'Sorry, You do not have the permission to view this page!' });
  }

  next();
});

// define route controllers for creating group and adding user to group
groupAndMessage.post('/', groupController.createGroup);
groupAndMessage.post('/:groupId/user', groupController.addGroupUser);

// define route controllers for creating message and viewing messages on group
groupAndMessage.post('/:groupId/message', messageController.createMessage);
groupAndMessage.get('/:groupId/messages', messageController.getGroupMessages);

/**
 * @exports groupAndMessage
 * @return {obj}  null
 */

export default groupAndMessage;
