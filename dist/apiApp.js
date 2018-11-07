"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routeSetup_1 = require("./config/routeSetup");
const bodyParserSetup_1 = require("./config/bodyParserSetup");
const databaseSetup_1 = require("./config/databaseSetup");
class TSTypeORMExampleApiApp {
    constructor() {
        this.apiApp = express();
        this.bodyParserConfig();
        this.routerConfig();
        this.pgDbConfig();
    }
    bodyParserConfig() {
        bodyParserSetup_1.default(this.apiApp);
    }
    routerConfig() {
        routeSetup_1.default(this.apiApp);
    }
    pgDbConfig() {
        databaseSetup_1.default();
    }
}
let appInstance = new TSTypeORMExampleApiApp();
exports.default = appInstance.apiApp;
//# sourceMappingURL=apiApp.js.map