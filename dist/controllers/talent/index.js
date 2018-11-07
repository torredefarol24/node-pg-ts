"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAll_1 = require("./getAll");
const getById_1 = require("./getById");
const editById_1 = require("./editById");
const createNew_1 = require("./createNew");
const deleteById_1 = require("./deleteById");
const createDummyPetTalents_1 = require("./createDummyPetTalents");
let TalentController = {
    getAllTalents: getAll_1.default,
    getSingleTalent: getById_1.default,
    editTalent: editById_1.default,
    createNewTalent: createNew_1.default,
    deleteTalent: deleteById_1.default,
    createPetsWithDummyTalents: createDummyPetTalents_1.default
};
exports.default = TalentController;
//# sourceMappingURL=index.js.map