import model from './message.schema';
import { Message } from '../../models/message.model';

async function getMessages(): Promise<Message[]>{
  return model.find();
}

async function getMessage(id: string): Promise<Message | null>{
  return model.findOne({ _id: id });
}

async function addMessage(message: Message): Promise<Message>{
  return model.create<Message>(message);
}

async function updateMessage(id: string, message: Partial<Message>): Promise<Message | null>{
  return model.findOneAndUpdate({ _id: id }, message);
}

async function deleteMessage(id: string): Promise<Message | null>{
  return model.findOneAndRemove({_id: id});
}

async function deleteMessagesByIdUserSender(id: string): Promise<Message[] | null>{
  return model.deleteMany({idUserSender: id});
}

async function deleteMessagesByIdUserAddressee(id: string): Promise<Message[] | null>{
  return model.deleteMany({idUserAddressee: id});
}

export default {
  getMessages,
  getMessage,
  addMessage,
  updateMessage,
  deleteMessage,
  deleteMessagesByIdUserSender,
  deleteMessagesByIdUserAddressee
};
