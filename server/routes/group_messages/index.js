import express from 'express';
import * as groupController from '../../controllers/groups';
import * as messageController from '../../controllers/messages';

const groupAndMessage = express.Router();

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
