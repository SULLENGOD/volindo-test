import express, {Application} from 'express';

const app: Application = express();

import moviesRoutes from './routes/movies'

app.set('port', process.env.PORT);

app.use(express.json());

app.use(moviesRoutes);

export default app;