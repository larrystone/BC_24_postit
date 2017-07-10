import app from 'express';
import routes from './routes';

app.use('/', routes);

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});