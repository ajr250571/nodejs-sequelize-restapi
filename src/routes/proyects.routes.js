import { Router } from 'express';
import { getProyects, createProyect } from "../controllers/proyects.controllers.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = Router();

// Add routes
 routes.get('/proyects', getProyects);
 routes.post('/proyects', createProyect);
 routes.put('/proyects/:id');
 routes.delete('/proyects/:id');
 routes.get('/proyects/:id');

export default routes;
