import express from 'express';
import langRoutes from './routes/languages';

const app = express();

app.use('/languages', langRoutes);

app.listen(3000);
