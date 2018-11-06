"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const Pet_1 = require("../models/Pet");
const Profile_1 = require("../models/Profile");
let DBVars = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "pgadminuser",
    password: "test1234",
    database: "pgtsc",
    synchronize: true,
    entities: [User_1.User, Pet_1.Pet, Profile_1.Profile]
};
exports.default = DBVars;
//# sourceMappingURL=dbConn.js.map