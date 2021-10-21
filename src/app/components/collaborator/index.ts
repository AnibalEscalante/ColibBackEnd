import express, { Express } from "express";
import router from "./collaborator.network"

const collaborator: Express = express();
collaborator.use('/collaboratorr', router);

export default collaborator;
