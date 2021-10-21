import { Discipline } from "./discipline.model";
import { Skill } from "./skill.model";
import { RequestC } from "./requestC.model";
import { Project } from "./project.model";

export interface User {
  _id?: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  movilPhone?: string;
  idDisciplines?: string[] | Discipline[];
  idSkills?: Skill[];
  idSavedProjects?: Project[] | string[];
  idMyProjects?: Project[] | string[];
  idRequestC?: RequestC[];
  idRequestResults?: RequestC[];
  updateAt?: Date;
  createdAt?: Date;
}