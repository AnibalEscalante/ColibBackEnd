import { Express } from "express";
import discipline from "./discipline";
import skill from "./skill";
import user from "./user";

const components: Express[] = [
    user,
    skill,
    discipline
];

export default components