"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAll_1 = require("./getAll");
const createNew_1 = require("./createNew");
const getById_1 = require("./getById");
const editById_1 = require("./editById");
const deleteById_1 = require("./deleteById");
const patchById_Profile_1 = require("./patchById_Profile");
const createWithDummy_Pets_1 = require("./createWithDummy_Pets");
let UserController = {
    getAll: getAll_1.default,
    createUser: createNew_1.default,
    getSingleUser: getById_1.default,
    editUser: editById_1.default,
    deleteUser: deleteById_1.default,
    editUserProfile: patchById_Profile_1.default,
    createWithDummyPets: createWithDummy_Pets_1.default
};
exports.default = UserController;
//# sourceMappingURL=index.js.map