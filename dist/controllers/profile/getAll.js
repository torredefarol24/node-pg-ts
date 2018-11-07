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
let getAllProfiles = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Profiles = typeorm_1.getRepository(Profile_1.Profile);
        const profileFindOptions = {
            relations: ["user"]
        };
        const profiles = yield Profiles.find(profileFindOptions);
        var context = {
            profiles: null
        };
        if (profiles.length > 0) {
            context.profiles = profiles;
            context.message = "Fetched Profiles from DB";
            context.success = true;
            return response.status(200).json(context);
        }
        else {
            context.message = "There are no Profiles in DB";
            context.success = false;
            return response.status(200).json(context);
        }
    });
};
exports.default = getAllProfiles;
//# sourceMappingURL=getAll.js.map