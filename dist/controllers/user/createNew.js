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
let createNewUser = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Users = typeorm_1.getRepository(User_1.User);
        const context = {
            user: null
        };
        if (!request.body.firstName || !request.body.lastName || !request.body.email) {
            context.message = "Request Body Keys Missing";
            context.success = false;
            return response.status(404).json(context);
        }
        const user = {
            firstName: request.body.firstName.trim(),
            lastName: request.body.lastName.trim(),
            email: request.body.email.trim()
        };
        try {
            yield Users.save(user);
            context.success = true;
            context.user = user;
            context.message = "User Created";
            return response.status(201).json(context);
        }
        catch (error) {
            context.success = false;
            context.message = error.detail;
            return response.status(500).json(context);
        }
    });
};
exports.default = createNewUser;
//# sourceMappingURL=createNew.js.map