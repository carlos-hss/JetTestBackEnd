import express from "express";
import { addClientToOperator } from "../controllers/files.controller";

const router = express.Router();

router.post("/", addClientToOperator);

export default router;
