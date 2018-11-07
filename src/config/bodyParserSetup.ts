import * as bodyParser from "body-parser";

let bodyParserSetup = function(appInstance) : void {
  appInstance.use(bodyParser.json())
  appInstance.use(bodyParser.urlencoded({ extended : false}))
}

export default bodyParserSetup