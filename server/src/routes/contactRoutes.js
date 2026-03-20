import { Router } from "express";
import { createContactController } from "../controllers/contactController.js";

const contactRouter = Router();

contactRouter.post("/", createContactController);

export { contactRouter };
