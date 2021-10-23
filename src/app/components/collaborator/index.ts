import express, { Express } from "express";
import router from "./collaborator.network"

const collaborator: Express = express();
<<<<<<< HEAD
collaborator.use('/collaborator', router);
=======
collaborator.use('/collaboratorr', router);
>>>>>>> fbdbd0241e4e31af54a40c6d772bc6c4dee73fcf

export default collaborator;
