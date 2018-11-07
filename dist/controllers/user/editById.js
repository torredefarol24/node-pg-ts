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
let patchUserById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Users = typeorm_1.getRepository(User_1.User);
        var context = {
            user: null
        };
        let userId = parseInt(request.params.id);
        if (!userId || isNaN(userId)) {
            context.message = "Invalid Route Params";
            context.success = false;
            return response.status(404).json(context);
        }
        if (!request.body.firstName || !request.body.lastName) {
            context.message = " Request Body Keys missing";
            context.success = false;
            return response.status(404).json(context);
        }
        const user = yield Users.createQueryBuilder("user").where("user.id = :id", { id: userId }).getOne();
        if (user) {
            let userParams = {
                firstName: request.body.firstName.trim(),
                lastName: request.body.lastName.trim()
            };
            yield Users.createQueryBuilder().update(User_1.User)
                .set(userParams)
                .where("id = :id", { id: userId }).execute();
            const updatedUser = yield Users.createQueryBuilder("user").where("user.id = :id", { id: userId }).getOne();
            context.user = updatedUser;
            context.message = "User Updated";
            context.success = true;
            return response.status(200).json(context);
        }
        else {
            context.message = "User Not Found";
            context.success = false;
            return response.status(404).json(context);
        }
    });
};
exports.default = patchUserById;
//# sourceMappingURL=editById.js.map