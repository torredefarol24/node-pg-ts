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
let createProfile = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Profiles = typeorm_1.getRepository(Profile_1.Profile);
        var context = {};
        if (!request.body.gender || !request.body.username || !request.body.bio) {
            context.message = "Request Body Keys Missing";
            return response.status(404).json(context);
        }
        const profile = {
            gender: request.body.gender.trim(),
            username: request.body.username.trim(),
            bio: request.body.bio.trim()
        };
        try {
            let result = yield Profiles.save(profile);
            context.profile = result;
            context.message = "Profile Created";
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
exports.default = createProfile;
//# sourceMappingURL=createNew.js.map