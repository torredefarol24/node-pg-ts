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
const User_1 = require("../../models/User");
const typeorm_1 = require("typeorm");
let createPetWithStaticUser = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Pets = typeorm_1.getRepository(Pet_1.Pet);
        const Users = typeorm_1.getRepository(User_1.User);
        var context = {};
        if (!request.body.age || !request.body.color || !request.body.nickname) {
            context.message = "Request Body Keys Missing";
            return response.status(404).json(context);
        }
        const staticUser = yield Users.createQueryBuilder("user").where("user.id = :id", { id: 3 }).getOne();
        const pet = {
            color: request.body.color.trim(),
            age: request.body.age.trim(),
            nickname: request.body.nickname.trim(),
            owner: staticUser
        };
        try {
            let result = yield Pets.save(pet);
            context.pet = result;
            context.message = "Pet Created";
            context.success = true;
            return response.status(201).json(context);
        }
        catch (error) {
            context.success = false;
            context.message = error;
            return response.status(404).json(context);
        }
    });
};
exports.default = createPetWithStaticUser;
//# sourceMappingURL=createNewWithUser.js.map