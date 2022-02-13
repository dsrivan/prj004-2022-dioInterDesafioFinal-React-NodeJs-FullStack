import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import {
  ListMessageController,
  ListMessageByIdController,
} from "./controllers/ListMessageController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const listMessageByIdController = new ListMessageByIdController();

router.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Bem vindo a API Dio Shopping" });
});

router.get("/message/:id", listMessageByIdController.hanle);
router.get("/message", listMessageController.hanle);
router.post("/message", createMessageController.handle);

export { router };
