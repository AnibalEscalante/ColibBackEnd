import express, { Express } from "express";
import router from "./request.network"

const user: Express = express();
user.use('/project', router);

export default user;
