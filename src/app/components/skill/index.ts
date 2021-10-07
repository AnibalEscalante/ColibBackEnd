import express, { Express } from "express";
import router from "./skill.network"

const skill: Express = express();
skill.use('/skill', router);

export default skill;
