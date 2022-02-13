import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

class ListMessageService {
  async execute() {
    const messageRepository = getCustomRepository(MessagesRepository);

    const allMessages = await messageRepository.find();

    return allMessages;
  }
}
class ListMessageByIdService {
  async execute(id) {
    const messageRepository = getCustomRepository(MessagesRepository);

    const allMessages = await messageRepository.find({ id_product: id });

    return allMessages || [];
  }
}

export { ListMessageService, ListMessageByIdService };
