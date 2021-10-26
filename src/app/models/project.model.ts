import { Collaborator } from "./collaborator.model";
import { Discipline } from "./discipline.model";
import { Skill } from "./skill.model";

export interface Project {
  _id?: string;
  title: string;
  content: string;
  state: string;
  finishDate: Date;
  idSkills: Skill[];
  idDisciplines: Discipline[];
  idCollaborators: Collaborator[];
  updateAt: Date;
  createdAt: Date;
}