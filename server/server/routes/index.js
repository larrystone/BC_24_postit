import express from 'express';

import user from './user';
import groupAndMessages from './group_messages';

const routes = express.Router();

// define routes for user and group actions
routes.use('/api/user', user);
routes.use('/api/group', groupAndMessages);

// define routes for homepage
routes.get('/', (req, res) => {
  res.status(200).json({ title: 'PostIt!...', message: 'Welcome Buddy...' });
});

// define catch all routes for http get requests
routes.get('*', (req, res) => {
  res.status(404).send('invalid link');
});

// define catch all routes for http post requests
routes.post('*', (req, res) => {
  res.status(404).send('invalid link');
});

/**
 * @exports routes
 * @return {obj}  null
 */
module.exports = routes;
