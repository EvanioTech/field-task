import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

const service = new TaskService()

export class TaskController {
    async createTask(req: Request, res: Response) {
        try {
            const { title, description } = req.body;
            const task = await service.createTask({ title, description });
            res.status(201).json(task);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async list(req: Request, res: Response) {
        try {
            const tasks = await service.list();
            res.json(tasks);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}