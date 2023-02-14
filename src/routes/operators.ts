import express from "express";
import Operator from "../controllers/operators.controller";

const router = express.Router();

router.get("/", Operator.getOperators);
router.get("/:id", Operator.getById);
router.post("/", Operator.create);
router.put("/:id", Operator.update);
router.delete("/:id", Operator.delete);

export default router;
