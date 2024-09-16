import { Hono } from 'hono';
import { ServicesController } from '../controllers/servicesController';

const servicesRouter = new Hono();
const servicesController = new ServicesController();

servicesRouter.get('/total', (c) => servicesController.getTotalServices(c));
servicesRouter.get('/list', (c) => servicesController.listServices(c));
servicesRouter.post('/add', (c) => servicesController.addService(c));
servicesRouter.put('/update/:id', (c) => servicesController.updateService(c));
servicesRouter.delete('/delete/:id', (c) => servicesController.deleteService(c));

export default servicesRouter;
