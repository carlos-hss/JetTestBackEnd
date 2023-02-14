import { Request, Response } from "express";
import { clientConnection } from "../connections";

class Client {
  async getClients(req: Request, res: Response) {
    const clients = await clientConnection.find();
    res.send(clients);
  }

  async getById(req: Request, res: Response) {
    const client = await clientConnection.findOne({
      where: { id: req.params.id },
    });
    res.send(client);
  }

  async create(req: Request, res: Response) {
    const client = await clientConnection.save(req.body);
    res.send(client);
  }

  async update(req: Request, res: Response) {
    const client = await clientConnection.update(req.params.id, req.body);
    res.send(client);
  }

  async delete(req: Request, res: Response) {
    const client = await clientConnection.delete(req.params.id);
    res.send(client);
  }
}

export default new Client();
