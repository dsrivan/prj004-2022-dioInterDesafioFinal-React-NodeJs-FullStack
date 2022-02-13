import { Request, Response } from "express";
import {
  ListMessageService,
  ListMessageByIdService,
} from "../services/ListMessagesService";

class ListMessageByIdController {
  async hanle(request: Request<{ id: string }>, response: Response) {
    const id = request.params.id;
    console.log(id);

    const listMessageByIdService = new ListMessageByIdService();

    const allMessages = await listMessageByIdService.execute(id);

    return response.json(allMessages);
  }
}
class ListMessageController {
  async hanle(request: Request, response: Response) {
    const listMessageService = new ListMessageService();

    const allMessages = await listMessageService.execute();

    return response.json(allMessages);
  }
}

export { ListMessageController, ListMessageByIdController };
