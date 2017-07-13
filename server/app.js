import { express } from 'express';
import { logger } from 'morgan';
import { bodyParser } from 'body-parser';
import { session } from 'express-session';

import routes from './routes';
import configs from './config/config.json';

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: configs.secret,
  resave: true,
  saveUninitialized: true }));

//  Connect all our routes
app.use('/', routes);

// Turn on server!
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
