import { Hono } from 'hono';
import { InvoiceController } from '../controllers/invoiceController';

const invoicesRouter = new Hono();
const invoicesController = new InvoiceController();

invoicesRouter.get('/total-amount', (c) => invoicesController.getTotalInvoiceAmount(c));
invoicesRouter.get('/clients-total-amount', (c) => invoicesController.getTotalInvoiceAmount(c));
invoicesRouter.get('/services-total-amount', (c) => invoicesController.getTotalInvoiceAmount(c));
invoicesRouter.get('/list', (c) => invoicesController.listInvoices(c));
invoicesRouter.get('/:id', (c) => invoicesController.viewInvoice(c));
invoicesRouter.post('/upload', (c) => invoicesController.uploadInvoice(c));
invoicesRouter.post('/add', (c) => invoicesController.addInvoice(c));
invoicesRouter.put('/update/:id', (c) => invoicesController.updateInvoice(c));

export default invoicesRouter;
