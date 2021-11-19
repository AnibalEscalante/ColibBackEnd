export interface Contact {
  _id?: string;
  nickName: string;
  profileImg: string;
  idUser: string;
  idSentMessages?: string[];
  idRecievedMessages?: string[];
  updateAt?: Date;
  createdAt?: Date;
}