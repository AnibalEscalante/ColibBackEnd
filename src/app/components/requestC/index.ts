import express, { Express } from "express";
import router from "./requestC.network"

const requestC: Express = express();
requestC.use('/requestC', router);

export default requestC;
