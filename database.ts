import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import "reflect-metadata";
import { Entities } from "./src/entity";
dotenv.config();

export const connection = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrationsTableName: "migrations",
  synchronize: true,
  logging: true,
  entities: Entities,
  migrations: ["src/migration/*.{js,ts}"],
  subscribers: ["src/subscriber/**/*.{js,ts}"],
});
