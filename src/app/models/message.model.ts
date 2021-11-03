export interface Message {
  _id?: string;
  idUserSender: string;
  idUserAddressee: string;
  content: string;
  updateAt?: Date;
  createdAt?: Date;
}