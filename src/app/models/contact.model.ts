export interface Contact {
  _id?: string;
  nickName: string;
  idUser: string;
  idSentMessages?: string[];
  idRecievedMessages?: string[];
  updateAt?: Date;
  createdAt?: Date;
}