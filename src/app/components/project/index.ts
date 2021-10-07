import express, { Express } from "express";
import router from "./project.network"

const user: Express = express();
user.use('/project', router);

export default user;
