import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

interface IMessage {
  email: string;
  message: string;
  id_product: string;
}

class CreateMessageService {
  async execute({ email, message, id_product }: IMessage) {
    const messageRepository = getCustomRepository(MessagesRepository);

    if (!email) {
      throw new Error("Por favor informe um email!");
    }

    if (!message) {
      throw new Error("Por favor escreva uma messagem!");
    }

    const newMessage = messageRepository.create({ email, message, id_product });

    await messageRepository.save(newMessage);

    return newMessage;
  }
}

export { CreateMessageService };
