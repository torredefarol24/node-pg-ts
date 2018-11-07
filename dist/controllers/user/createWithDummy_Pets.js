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
const User_1 = require("../../models/User");
const Pet_1 = require("../../models/Pet");
const typeorm_1 = require("typeorm");
let createUserWithDummyPets = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let Users = typeorm_1.getRepository(User_1.User);
        let Pets = typeorm_1.getRepository(Pet_1.Pet);
        const dummyPet1 = new Pet_1.Pet();
        const dummyPet2 = new Pet_1.Pet();
        dummyPet1.age = 5;
        dummyPet1.color = "golden";
        dummyPet1.nickname = "Margaret";
        dummyPet2.age = 7;
        dummyPet2.color = "aubergine";
        dummyPet2.nickname = "Mocha";
        const dummyUser = yield Users.createQueryBuilder("user").where("user.id = :id", { id: 4 }).getOne();
        yield Pets.save(dummyPet1);
        yield Pets.save(dummyPet2);
        dummyUser.pets = [dummyPet1, dummyPet2];
        yield Users.save(dummyUser);
        var context = {
            user: dummyUser,
            success: true,
            message: "User with dummy pets created"
        };
        return response.status(201).json(context);
    });
};
exports.default = createUserWithDummyPets;
//# sourceMappingURL=createWithDummy_Pets.js.map