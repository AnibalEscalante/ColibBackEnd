import { Message } from "./message.model";

export interface Contact {
  _id?: string;
  name: string;
  lastName: string;
  idUser: string;
  idMessages: Message[]
  updateAt?: Date;
  createdAt?: Date;
}