import { Message } from "./message.model";

export interface Contact {
  _id?: string;
  name: string;
  lastName: string;
  idUser: string;
  idSentMessages?: Message[] | string[];
  idRecievedMessages?: Message[] | string[];
  updateAt?: Date;
  createdAt?: Date;
}