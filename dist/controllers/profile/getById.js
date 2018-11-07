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
const Profile_1 = require("../../models/Profile");
const typeorm_1 = require("typeorm");
let getProfileById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Profiles = typeorm_1.getRepository(Profile_1.Profile);
        var context = {
            profile: null
        };
        let profileId = parseInt(request.params.id);
        if (!profileId || isNaN(profileId)) {
            context.message = "Invalid Route Params";
            return response.status(404).json(context);
        }
        const profile = yield Profiles.createQueryBuilder("profile").where("profile.id = :id", { id: profileId }).getOne();
        if (profile) {
            context.profile = profile;
            context.message = "Profile Found";
            context.success = true;
            return response.status(200).json(context);
        }
        else {
            context.success = false;
            context.message = "Profile Doesn't Exist";
            return response.status(404).json(context);
        }
    });
};
exports.default = getProfileById;
//# sourceMappingURL=getById.js.map