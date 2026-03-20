import { Router } from "express";
import { createActionController } from "../controllers/actionController.js";

const actionRouter = Router();

actionRouter.post("/click", createActionController);

export { actionRouter };
