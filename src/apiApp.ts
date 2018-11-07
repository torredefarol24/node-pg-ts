import * as express from "express";

import routerSetup from './config/routeSetup';
import bodyParserSetup from './config/bodyParserSetup';
import databaseSetup from './config/databaseSetup';

class TSTypeORMExampleApiApp {
  constructor(){
    this.apiApp = express()
    this.bodyParserConfig();
    this.routerConfig();
    this.pgDbConfig();
  }

  public apiApp : express.Application;

  private bodyParserConfig() : void {
    bodyParserSetup(this.apiApp);
  }

  private routerConfig(): void {
    routerSetup(this.apiApp);
  }

  private pgDbConfig():void{
    databaseSetup();
  }
}

let appInstance = new TSTypeORMExampleApiApp()
export default appInstance.apiApp;

