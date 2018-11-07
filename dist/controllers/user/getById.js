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
let getUserById = function (request, response) {
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
        const user = yield Users.createQueryBuilder("user").where("user.id = :id", { id: userId }).getOne();
        if (user) {
            context.user = user;
            context.message = "User Found";
            context.success = true;
            return response.status(200).json(context);
        }
        else {
            context.message = "User Doesn't Exist";
            context.success = false;
            return response.status(404).json(context);
        }
    });
};
exports.default = getUserById;
//# sourceMappingURL=getById.js.map