import apiApp from './apiApp';
import appKeys from './keys/appKeys';

let apiCallBack = function(){
  console.log("API Served on port ", appKeys.API_PORT)
}

apiApp.listen(appKeys.API_PORT, apiCallBack);