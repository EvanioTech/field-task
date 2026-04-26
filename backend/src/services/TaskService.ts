import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../database/prismaClient";

export class TaskService {
    async createTask(data: { title: string; description?: string }) {
        if (!data.title) {
            throw new Error("Title is required");
        }

        const task = await prisma.task.create({ data });
        return task;
    }

    async list () {
        const tasks = await prisma.task.findMany({
            orderBy: { createdAt: "desc" },
        });
        return tasks;
    }
}

