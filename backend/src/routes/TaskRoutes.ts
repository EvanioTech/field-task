import { Router } from "express";
import { TaskController } from "../controllers/TaskController";

const router = Router();
const controller = new TaskController();

router.post("/tasks", (req, res) => controller.createTask(req, res));
router.get("/tasks", (req, res) => controller.list(req, res));

export default router;