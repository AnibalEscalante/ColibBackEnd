import { Discipline } from "./discipline.model";
import { Skill } from "./skill.model";
import { RequestC } from "./requestC.model";
import { Project } from "./project.model";

export interface User {
    _id?: string;
    name: string;
    lastName: string;
    movilPhone?: string;
    idDisciplines?: string[] | Discipline[];
    idSkills?: Skill[];
    idSavedProjects?: string[] | Project[];
    idMyProjects?: Project[];
    idRequestC?: RequestC[];
    idRequestResults?: RequestC[];
    updateAt?: Date;
    createdAt?: Date;
  }