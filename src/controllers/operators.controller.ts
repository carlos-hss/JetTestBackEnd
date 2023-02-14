import { Request, Response } from "express";
import { operatorConnection, clientConnection } from "../connections";

class Operator {
  async getOperators(req: Request, res: Response) {
    const operators = await operatorConnection.find({
      relations: {
        clients: true,
      },
    });

    res.send(operators);
  }

  async getById(req: Request, res: Response) {
    const operator = await operatorConnection.findOne({
      where: { id: req.params.id },
    });
    res.send(operator);
  }

  async create(req: Request, res: Response) {
    const operator = await operatorConnection.save(req.body);
    res.send(operator);
  }

  async update(req: Request, res: Response) {
    const operator = await operatorConnection.update(req.params.id, req.body);
    res.send(operator);
  }

  async delete(req: Request, res: Response) {
    const operator = await operatorConnection.delete(req.params.id);
    res.send(operator);
  }
}

export default new Operator();
