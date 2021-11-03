import repository from "./message.repository";
import { Message } from '../../models/message.model';

function getMessages(): Promise<Message[]>{
  return repository.getMessages();
}

function getMessage(id: string): Promise<Message | null>{
  return repository.getMessage(id);
}

function addMessage(message: Message): Promise<Message>{
  return repository.addMessage(message);
}

function updateMessage(id: string, message: Partial<Message>): Promise<Message | null>{
  return repository.updateMessage(id, message);
}

function deleteMessage(id: string){
  return repository.deleteMessage(id);
}

function deleteMessageByIdUser(id: string){
  return repository.deleteMessageByIdUser(id);
}

export default {
  addMessage,
  getMessages,
  getMessage,
  updateMessage,
  deleteMessage,
  deleteMessageByIdUser
};
