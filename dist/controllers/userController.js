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
const User_1 = require("../models/User");
const typeorm_1 = require("typeorm");
let getAllUsers = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Users = typeorm_1.getRepository(User_1.User);
        const users = yield Users.find();
        var context = {
            users: users
        };
        return response.status(200).json(context);
    });
};
let createNewUser = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Users = typeorm_1.getRepository(User_1.User);
        const user = {
            firstName: request.body.firstName.trim(),
            lastName: request.body.lastName.trim(),
            email: request.body.email.trim()
        };
        yield Users.save(user);
        return response.status(201).json(user);
    });
};
let getUserById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Users = typeorm_1.getRepository(User_1.User);
        const user = yield Users.createQueryBuilder("user").where("user.id = :id", { id: request.params.id }).getOne();
        if (user) {
            var context = {
                user: user
            };
            return response.status(200).json(context);
        }
        else {
            return response.status(404).json({ msg: "User Not Found" });
        }
    });
};
let patchUserById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Users = typeorm_1.getRepository(User_1.User);
        const user = yield Users.createQueryBuilder("user").where("user.id = :id", { id: request.params.id }).getOne();
        if (user) {
            yield Users.createQueryBuilder().update(User_1.User)
                .set({ firstName: request.body.firstName, lastName: request.body.lastName })
                .where("id = :id", { id: request.params.id }).execute();
            return response.status(200).json({ msg: "User Updated", user: user });
        }
        else {
            return response.status(404).json({ msg: "User Not Found" });
        }
    });
};
let deleteUserById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Users = typeorm_1.getRepository(User_1.User);
        const user = yield Users.createQueryBuilder("user").where("user.id = :id", { id: request.params.id }).getOne();
        if (user) {
            yield Users.createQueryBuilder().delete().from(User_1.User).where("id = :id", { id: request.params.id }).execute();
            return response.status(200).json({ msg: "User Deleted" });
        }
        else {
            return response.status(404).json({ msg: "User Not Found" });
        }
    });
};
let UserController = {
    getAll: getAllUsers,
    createUser: createNewUser,
    getSingleUser: getUserById,
    editUser: patchUserById
};
exports.default = UserController;
//# sourceMappingURL=userController.js.map