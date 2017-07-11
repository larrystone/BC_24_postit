import express from 'express';

import controller from '../../controllers';

const group = express.Router();
const groupController = controller.groups;

group.use('*', (req, res, next) => {
  // check for authentication here
  if (!req.session.user) {
    res.status(401).send('Unauthorized Request');
  }

  next();
});

group.post('/', groupController.createGroup);
group.post('/:groupId/user', groupController.addGroupUser);

group.post('*', (req, res) => {
  res.status(404).send('Invalid link');
});

module.exports = group;
