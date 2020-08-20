import express from 'express';
import ClassesController from './controller/ClassesController';
import ConnectionController from './controller/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

export default routes;