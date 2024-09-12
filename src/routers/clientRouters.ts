import { Hono } from "hono";
import ClientsController from "../controllers/clients";

const clientRouters = new Hono();

const clientsController = new ClientsController();

clientRouters.post("/", clientsController.addClient);

export default clientRouters;
