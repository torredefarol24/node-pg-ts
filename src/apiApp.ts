import * as express from "express";
import * as bodyParser from "body-parser";
import {createConnection, getConnectionManager} from "typeorm";
import DBVars from './config/dbConn';
import userRouter from "./routes/userRoutes";
import profileRouter from './routes/profileRoutes';
import petRouter from './routes/petRoutes';

class TSTypeORMExampleApiApp {
  constructor(){
    this.apiApp = express()
    this.bodyParserConfig();
    this.routerConfig();
    this.pgDbConfig();
  }

  public apiApp : express.Application;

  private bodyParserConfig() : void {
    this.apiApp.use(bodyParser.json())
    this.apiApp.use(bodyParser.urlencoded({ extended : false}))
  }

  private routerConfig(): void {
    this.apiApp.use("/api/users", userRouter);
    this.apiApp.use("/api/profiles", profileRouter);
    this.apiApp.use("/api/pets", petRouter);
  }

  private async pgDbConfig(): Promise <void>{
    let pgDbConfigOptions: any = DBVars;
    await createConnection(pgDbConfigOptions);
    let dbConnSuccess = getConnectionManager().get(pgDbConfigOptions.name).isConnected;

    if (dbConnSuccess == true){
      console.log("DB CONNECTION SUCCESSFULL");
    } else {
      console.error("DB CONNECTION FAILED")
    }
  }
}

let appInstance = new TSTypeORMExampleApiApp()
export default appInstance.apiApp;

