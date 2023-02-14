import express from "express";
import Clients from "../controllers/clients.controller";

const router = express.Router();

router.get("/", Clients.getClients);
router.get("/:id", Clients.getById);
router.post("/", Clients.create);
router.put("/:id", Clients.update);
router.delete("/:id", Clients.delete);

export default router;
