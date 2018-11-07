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
const Pet_1 = require("../../models/Pet");
const typeorm_1 = require("typeorm");
let editPetById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Pets = typeorm_1.getRepository(Pet_1.Pet);
        var context = {
            pet: null
        };
        let petId = parseInt(request.params.id);
        if (!petId || isNaN(petId)) {
            context.message = "Invalid Route Params";
            context.success = false;
            return response.status(404).json(context);
        }
        if (!request.body.age || !request.body.color || !request.body.nickname) {
            context.message = "Request Body Keys Missing";
            context.success = false;
            return response.status(404).json(context);
        }
        const pet = yield Pets.createQueryBuilder("pet").where("pet.id = :id", { id: petId }).getOne();
        if (pet) {
            let petParams = {
                age: request.body.age.trim(),
                color: request.body.color.trim(),
                nickname: request.body.nickname.trim()
            };
            yield Pets.createQueryBuilder().update(Pet_1.Pet)
                .set(petParams)
                .where("id = :id", { id: petId }).execute();
            const updatedPet = yield Pets.createQueryBuilder("pet").where("pet.id = :id", { id: petId }).getOne();
            context.pet = updatedPet;
            context.success = true;
            context.message = "Pet Updated";
            return response.status(200).json(context);
        }
        else {
            context.success = false;
            context.message = "Pet Not Found";
            return response.status(404).json(context);
        }
    });
};
exports.default = editPetById;
//# sourceMappingURL=editById.js.map