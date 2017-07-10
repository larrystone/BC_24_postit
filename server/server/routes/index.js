import express from 'express';

import user from './user';
// import group from './group';

const routes = express.Router();

routes.use('/api/user', user);
// routes.use('/api/group', group);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('*', (req, res) => {
  res.status(404).send('invalid link');
});

module.exports = routes;
