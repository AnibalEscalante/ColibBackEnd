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

async function deleteMessages(idSentMessages: string[], idRecievedMessages: string[]){
  await repository.deleteMessages(idSentMessages);
  await repository.deleteMessages(idRecievedMessages);
  return
}

export default {
  addMessage,
  getMessages,
  getMessage,
  updateMessage,
  deleteMessage,
  deleteMessages
};
