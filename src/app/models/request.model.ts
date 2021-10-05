import { Project } from "./project.model";
import { User } from "./user.model";

export interface Request {
    _id?: string;
    idProject: Project;
    idUserSender: User;
    state: string;
    updateAt: Date;
    createdAt: Date;
}