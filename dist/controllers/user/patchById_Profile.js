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
const Profile_1 = require("../../models/Profile");
const typeorm_1 = require("typeorm");
let patchUserById_UserProfile = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Users = typeorm_1.getRepository(User_1.User);
        const Profiles = typeorm_1.getRepository(Profile_1.Profile);
        var context = {
            user: null
        };
        let userId = parseInt(request.params.id);
        if (!userId || isNaN(userId)) {
            context.message = "Invalid Route Params";
            context.success = false;
            return response.status(404).json(context);
        }
        const user = yield Users.createQueryBuilder("user").where("user.id = :id", { id: userId }).leftJoinAndSelect("user.profile", "profile").getOne();
        if (user) {
            context.user = user;
            if (user.profile == null) {
                let userProfile = new Profile_1.Profile();
                userProfile.gender = request.body.gender;
                userProfile.username = request.body.username;
                try {
                    yield Profiles.save(userProfile);
                    user.profile = userProfile;
                    yield Users.save(user);
                    context.success = true;
                    return response.status(200).json(context);
                }
                catch (error) {
                    context.success = false;
                    context.message = error.detail;
                    return response.status(500).json(context);
                }
            }
            else {
                let userNewProfile = yield Profiles.createQueryBuilder("profile").where("profile.id =:id", { id: user.profile.id }).getOne();
                userNewProfile.gender = request.body.gender;
                userNewProfile.username = request.body.username;
                try {
                    yield Profiles.save(userNewProfile);
                    user.profile = userNewProfile;
                    context.success = true;
                    context.message = "User Profile Updated";
                    return response.status(200).json(context);
                }
                catch (error) {
                    context.success = false;
                    context.message = error.detail;
                    return response.status(500).json(context);
                }
            }
        }
        else {
            context.message = "User Doesn't Exist";
            context.success = false;
            return response.status(404).json(context);
        }
    });
};
exports.default = patchUserById_UserProfile;
//# sourceMappingURL=patchById_Profile.js.map