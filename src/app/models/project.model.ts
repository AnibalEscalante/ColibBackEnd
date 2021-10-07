import { Discipline } from "./discipline.model";
import { Skill } from "./skill.model";
import { User } from "./user.model";

export interface Project {
    _id?: string;
    title: string;
    content: string;
    state: string;
    finishDate: Date;
    idSkills: Skill[];
    idDisciplines: Discipline[];
    idColaborators: User[];
    updateAt: Date;
    createdAt: Date;
  }