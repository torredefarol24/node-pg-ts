"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
let DBVars = {
    name: "pgdb-conn",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "pgadminuser",
    password: "test1234",
    database: "pgtsc",
    synchronize: true,
    entities: [User_1.User]
};
exports.default = DBVars;
//# sourceMappingURL=dbConn.js.map