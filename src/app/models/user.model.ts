import { Discipline } from "./discipline.model";
import { Skill } from "./skill.model";
import { RequestC } from "./request.model";
import { Project } from "./project.model";

export interface User {
    _id?: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    movilPhone?: string;
    idDisciplines?: Discipline[];
    idSkills?: Skill[];
    idSavedProjects?: Project[];
    idMyProjects?: Project[];
    idRequestC?: RequestC[];
    idRequestResults?: RequestC[];
    updateAt?: Date;
    createdAt?: Date;
  }