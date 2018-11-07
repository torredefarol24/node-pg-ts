"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAll_1 = require("./pet/getAll");
const getById_1 = require("./pet/getById");
const createNew_1 = require("./pet/createNew");
const editById_1 = require("./pet/editById");
const deleteById_1 = require("./pet/deleteById");
const createNewWithUser_1 = require("./pet/createNewWithUser");
let PetController = {
    getAllPets: getAll_1.default,
    getSinglePet: getById_1.default,
    editSinglePet: editById_1.default,
    createNewPet: createNew_1.default,
    deleteSinglePet: deleteById_1.default,
    createWithStaticUser: createNewWithUser_1.default
};
exports.default = PetController;
//# sourceMappingURL=petController.js.map