import express, { Application } from "express";
import filesRoute from "./src/routes/files";
import operatorsRoute from "./src/routes/operators";
import * as dotenv from "dotenv";
import cors from "cors";
import { connection } from "./database";

dotenv.config();

const app: Application = express();

connection
  .initialize()
  .then(async () => {
    app.use(cors());
    app.use(express.json());

    app.use("/files", filesRoute);
    app.use("/operators", operatorsRoute);
  })
  .catch((error) => console.log(error));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
