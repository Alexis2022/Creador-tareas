import { Router } from "express";
import {getTaks, getTak, createTaks, updateTaks, deleteTaks} from "../controllers/task.controllers.js"

const router = Router();

router.get("/tasks", getTaks);

router.get("/tasks/:id", getTak);

router.post("/tasks", createTaks);

router.put("/tasks/:id", updateTaks);

router.delete("/tasks/:id", deleteTaks);


export default router;