import user from './user';
// import group from './group';

import express from 'express';

const routes = express.Router();

routes.use('/api/user', user);
// routes.use('/api/group', group);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;