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
const typeorm_1 = require("typeorm");
let getAllUsers = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Users = typeorm_1.getRepository(User_1.User);
        const userFindOptions = {
            relations: ["profile", "pets"]
        };
        const users = yield Users.find(userFindOptions);
        const context = {
            users: null
        };
        if (users.length > 0) {
            context.users = users;
            context.success = true;
            context.message = "Users Retrieved from DB";
            return response.status(200).json(context);
        }
        else {
            context.success = false;
            context.message = "There are no Users in DB";
            return response.status(200).json(context);
        }
    });
};
exports.default = getAllUsers;
//# sourceMappingURL=getAll.js.map