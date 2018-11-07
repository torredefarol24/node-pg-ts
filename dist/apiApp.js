"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const typeorm_1 = require("typeorm");
const dbConn_1 = require("./config/dbConn");
const userRoutes_1 = require("./routes/userRoutes");
const profileRoutes_1 = require("./routes/profileRoutes");
const petRoutes_1 = require("./routes/petRoutes");
class TSTypeORMExampleApiApp {
    constructor() {
        this.apiApp = express();
        this.bodyParserConfig();
        this.routerConfig();
        this.pgDbConfig();
    }
    bodyParserConfig() {
        this.apiApp.use(bodyParser.json());
        this.apiApp.use(bodyParser.urlencoded({ extended: false }));
    }
    routerConfig() {
        this.apiApp.use("/api/users", userRoutes_1.default);
        this.apiApp.use("/api/profiles", profileRoutes_1.default);
        this.apiApp.use("/api/pets", petRoutes_1.default);
    }
    pgDbConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            let pgDbConfigOptions = dbConn_1.default;
            yield typeorm_1.createConnection(pgDbConfigOptions);
            let dbConnSuccess = typeorm_1.getConnectionManager().get(pgDbConfigOptions.name).isConnected;
            if (dbConnSuccess == true) {
                console.log("DB CONNECTION SUCCESSFULL");
            }
            else {
                console.error("DB CONNECTION FAILED");
            }
        });
    }
}
let appInstance = new TSTypeORMExampleApiApp();
exports.default = appInstance.apiApp;
//# sourceMappingURL=apiApp.js.map