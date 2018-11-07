import DBVars from '../keys/dbConn';
import {createConnection, getConnectionManager} from "typeorm";

let databaseSetup = async function() {
  let pgDbConfigOptions: any = DBVars;
  await createConnection(pgDbConfigOptions);
  let dbConnSuccess = getConnectionManager().get(pgDbConfigOptions.name).isConnected;

  if (dbConnSuccess == true){
    console.log("DB CONNECTION SUCCESSFULL");
  } else {
    console.error("DB CONNECTION FAILED")
  }
}

export default databaseSetup;