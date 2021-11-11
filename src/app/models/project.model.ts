export interface Project {
  _id?: string;
  title: string;
  content: string;
  state: string;
  finishDate: Date;
  idSkills: string[];
  idDisciplines: string[];
  idCollaborators: string[];
  updateAt: Date;
  createdAt: Date;
}