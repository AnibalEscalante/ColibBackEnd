import { Express } from "express";
import discipline from "./discipline";
import skill from "./skill";
import project from "./project";
import user from "./user";
import requestC from "./requestC";
import collaborator from "./collaborator";

const components: Express[] = [
    user,
    project,
    skill,
    discipline,
    requestC,
    collaborator
];

export default components