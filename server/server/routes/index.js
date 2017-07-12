import express from 'express';

import user from './user';
import groupAndMessages from './group_messages';

const routes = express.Router();

routes.use('/api/user', user);
routes.use('/api/group', groupAndMessages);

routes.get('/', (req, res) => {
  res.status(200).json({ title: 'PostIt!...', message: 'Welcome Buddy...' });
});

routes.get('*', (req, res) => {
  res.status(404).send('invalid link');
});

routes.post('*', (req, res) => {
  res.status(404).send('invalid link');
});

module.exports = routes;
