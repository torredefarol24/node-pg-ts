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
let deletePetById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Pets = typeorm_1.getRepository(Pet_1.Pet);
        var context = {};
        let petId = parseInt(request.params.id);
        if (!petId || isNaN(petId)) {
            context.message = "Invalid Route Params";
            context.success = false;
            return response.status(404).json(context);
        }
        const pet = yield Pets.createQueryBuilder("pet").where("pet.id = :id", { id: petId }).getOne();
        if (pet) {
            yield Pets.createQueryBuilder().delete().from(Pet_1.Pet).where("id = :id", { id: petId }).execute();
            context.message = "Pet Deleted";
            context.success = true;
            return response.status(200).json(context);
        }
        else {
            context.message = "Pet Not Found";
            context.success = false;
            return response.status(404).json(context);
        }
    });
};
exports.default = deletePetById;
//# sourceMappingURL=deleteById.js.map