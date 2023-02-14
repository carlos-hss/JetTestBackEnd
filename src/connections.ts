import { connection } from "../database";
import { Client } from "./entity/client";
import { Operator } from "./entity/operator";

const operatorConnection = connection.getRepository(Operator);
const clientConnection = connection.getRepository(Client);

export { operatorConnection, clientConnection };
