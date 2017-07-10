import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//  Connect all our routes
app.use('/', routes);

// Turn on that server!
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
