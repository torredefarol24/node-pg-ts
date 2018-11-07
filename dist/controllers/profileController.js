"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAll_1 = require("./profile/getAll");
const createNew_1 = require("./profile/createNew");
const getById_1 = require("./profile/getById");
const editById_1 = require("./profile/editById");
const deleteById_1 = require("./profile/deleteById");
let profileController = {
    getAll: getAll_1.default,
    createNewProfile: createNew_1.default,
    getSingleProfile: getById_1.default,
    editProfile: editById_1.default,
    deleteProfile: deleteById_1.default
};
exports.default = profileController;
//# sourceMappingURL=profileController.js.map