import express, { Express } from "express";
import router from "./discipline.network"

const discipline: Express = express();
discipline.use('/discipline', router);

export default discipline;
