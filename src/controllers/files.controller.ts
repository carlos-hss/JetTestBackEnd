import { Request, Response } from "express";
import csv_parser from "csv-parser";
import { operatorConnection, clientConnection } from "../connections";

export const addClientToOperator = async (req: Request, res: Response) => {
  const csvList = [];
  const operators = await operatorConnection.find();
  let operatorIndex = 0;

  if (!operators) {
    throw new Error("No operator found");
  }

  try {
    if (!req) {
      throw new Error("No file was uploaded.");
    }

    req
      .pipe(csv_parser())
      .on("data", (data) => {
        csvList.push(data);
      })
      .on("end", () => {
        csvList.forEach((data) => {
          if (operatorIndex >= operators.length) {
            operatorIndex = 0;
          }

          clientConnection.save({
            name: data.nome,
            birthDate: data.nascimento,
            value: data.valor,
            email: data.email,
            operator: operators[operatorIndex],
          });

          operatorIndex++;
        });
      });

    const response = await clientConnection.find();
    res.send(response);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
