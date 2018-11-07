"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAll_1 = require("./getAll");
const getById_1 = require("./getById");
const createNew_1 = require("./createNew");
const editById_1 = require("./editById");
const deleteById_1 = require("./deleteById");
const createNewWithUser_1 = require("./createNewWithUser");
let PetController = {
    getAllPets: getAll_1.default,
    getSinglePet: getById_1.default,
    editSinglePet: editById_1.default,
    createNewPet: createNew_1.default,
    deleteSinglePet: deleteById_1.default,
    createWithStaticUser: createNewWithUser_1.default
};
exports.default = PetController;
//# sourceMappingURL=index.js.map