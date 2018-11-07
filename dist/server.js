"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiApp_1 = require("./apiApp");
const appVars_1 = require("./keys/appVars");
let apiCallBack = function () {
    console.log("API Served on port ", appVars_1.default.API_PORT);
};
apiApp_1.default.listen(appVars_1.default.API_PORT, apiCallBack);
//# sourceMappingURL=server.js.map