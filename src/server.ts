import apiApp from './apiApp';
import appVars from './keys/appVars';

let apiCallBack = function(){
  console.log("API Served on port ", appVars.API_PORT)
}

apiApp.listen(appVars.API_PORT, apiCallBack);