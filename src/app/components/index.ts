import { Express, request } from "express";
import discipline from "./discipline";
import skill from "./skill";
import project from "./project";
import user from "./user";
import requestC from "./requestC";

const components: Express[] = [
    user,
    project,
    skill,
    discipline,
    requestC
];

export default components