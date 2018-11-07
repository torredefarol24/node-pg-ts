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
const dbConn_1 = require("../keys/dbConn");
const typeorm_1 = require("typeorm");
let databaseSetup = function () {
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
};
exports.default = databaseSetup;
//# sourceMappingURL=databaseSetup.js.map