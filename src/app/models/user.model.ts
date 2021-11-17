export interface User {
  _id?: string;
  nickName: string;
  name: string;
  lastName: string;
  movilPhone?: string;
  profileImg: string;
  idDisciplines?: string[];
  idSkills?: string[];
  idSavedProjects?: string[];
  idMyProjects?: string[];
  idCollaboratingProjects?: string[];
  idRequestsC?: string[];
  idRequestResults?: string[];
  idContacts?: string[];
  updateAt?: Date;
  createdAt?: Date;
}