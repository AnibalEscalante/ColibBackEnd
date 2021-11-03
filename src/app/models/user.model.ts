import { Discipline } from "./discipline.model";
import { Skill } from "./skill.model";
import { RequestC } from "./requestC.model";
import { Project } from "./project.model";
import { Contact } from './contact.model';

export interface User {
  _id?: string;
  name: string;
  lastName: string;
  movilPhone?: string;
  idDisciplines?: string[] | Discipline[];
  idSkills?: Skill[];
  idSavedProjects?: Project[] | string[];
  idMyProjects?: Project[] | string[];
  idRequestsC?: RequestC[];
  idRequestResults?: RequestC[];
  idConctacts?: Contact[];
  updateAt?: Date;
  createdAt?: Date;
}