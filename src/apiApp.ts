import * as express from "express";
import * as bodyParser from "body-parser";
import {createConnection, getConnectionManager} from "typeorm";
import DBVars from './config/dbConn';
import userRouter from "./routes/userRoutes";
import profileRouter from './routes/profileRoutes';

class SequelizeExampleApiApp {
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

let appInstance = new SequelizeExampleApiApp()
export default appInstance.apiApp;

