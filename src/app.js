import express from 'express';
import proyectsRoutes from './routes/proyects.routes.js';

const app = express();

app.use(express.json());

app.use(proyectsRoutes);

export default app;