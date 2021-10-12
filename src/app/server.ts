import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import logModule from "./modules/log.module";
import mongooseModule from "./modules/mongoose.module";
import components from "./components";
import { createServer } from "http";

async function main(){
  const server: Express = express();
  const port: number = parseInt(process.env['PORT'] || '5200');

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(morgan('dev'));
  server.use(cors());
  server.use('/api', ...components);


  let httpServer = createServer(server)
 
  try {
    await mongooseModule.connect();
    logModule.success('Database connection successful');

    httpServer.listen(port, () => {
      logModule.success(`Server listening on: http://localhost:${port}`);
  })
    
    // server.listen(port, () => {
    //   logModule.success(`Server listening on: http://localhost:${port}`);
    // });
  } 
  catch (error) {
    logModule.error(`Failed database connection`);
  }

}
export default { main };
