import { Context } from "hono";
import { insertRecord } from "../db/services";
import { clients } from "../schemas/clients";


class ClientsController {

    async addClient(c: Context) {

        const reqBody = await c.req.json();

        const clientData = await insertRecord(clients, reqBody);

        return c.json(clientData);

    }
};

export default ClientsController;


