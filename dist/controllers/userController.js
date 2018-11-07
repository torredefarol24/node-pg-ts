"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAll_1 = require("./user/getAll");
const createNew_1 = require("./user/createNew");
const getById_1 = require("./user/getById");
const editById_1 = require("./user/editById");
const deleteById_1 = require("./user/deleteById");
const patchById_Profile_1 = require("./user/patchById_Profile");
let UserController = {
    getAll: getAll_1.default,
    createUser: createNew_1.default,
    getSingleUser: getById_1.default,
    editUser: editById_1.default,
    deleteUser: deleteById_1.default,
    editUserProfile: patchById_Profile_1.default
};
exports.default = UserController;
//# sourceMappingURL=userController.js.map