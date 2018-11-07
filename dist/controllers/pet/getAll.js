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
let getAll = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Pets = typeorm_1.getRepository(Pet_1.Pet);
        const petFindOptions = {
            relations: ["owner"]
        };
        const pets = yield Pets.find(petFindOptions);
        var context = {
            pets: null
        };
        if (pets.length > 0) {
            context.pets = pets;
            context.message = "Fetched Pets from DB";
            context.success = true;
            return response.status(200).json(context);
        }
        else {
            context.message = "There are no Pets in DB";
            context.success = false;
            return response.status(200).json(context);
        }
    });
};
exports.default = getAll;
//# sourceMappingURL=getAll.js.map