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
<<<<<<< HEAD
    idSavedProjects?: string[] | Project[];
    idMyProjects?: Project[];
=======
    idSavedProjects?: Project[] | string[];
    idMyProjects?: Project[] | string[];
>>>>>>> 3c6ef845a77e3653324ab775cbfeb8575d6f9d44
    idRequestC?: RequestC[];
    idRequestResults?: RequestC[];
    updateAt?: Date;
    createdAt?: Date;
  }