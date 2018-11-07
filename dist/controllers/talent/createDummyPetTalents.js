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
const typeorm_1 = require("typeorm");
const Talent_1 = require("../../models/Talent");
const Pet_1 = require("../../models/Pet");
let createDummyPetsWithTalents = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let Talents = typeorm_1.getRepository(Talent_1.Talent);
        let Pets = typeorm_1.getRepository(Pet_1.Pet);
        const talent1 = new Talent_1.Talent();
        talent1.name = "bungie-jumping";
        yield Talents.save(talent1);
        const talent2 = yield Talents.createQueryBuilder("talent").where("talent.id = :id", { id: 2 }).getOne();
        const pet1 = yield Pets.createQueryBuilder("pet").where("pet.id = :id", { id: 3 }).getOne();
        pet1.talents = [talent1, talent2];
        yield Pets.save(pet1);
        let context = {
            success: true,
            message: "Talent assigned to pet",
            pet: pet1
        };
        return response.status(200).json(context);
    });
};
exports.default = createDummyPetsWithTalents;
//# sourceMappingURL=createDummyPetTalents.js.map