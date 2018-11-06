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
const Profile_1 = require("../models/Profile");
const typeorm_1 = require("typeorm");
let getAllProfiles = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Profiles = typeorm_1.getRepository(Profile_1.Profile);
        const profiles = yield Profiles.find();
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
let createProfile = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Profiles = typeorm_1.getRepository(Profile_1.Profile);
        var context = {};
        if (!request.body.gender || !request.body.username) {
            context.message = "Request Body Keys Missing";
            return response.status(404).json(context);
        }
        const profile = {
            gender: request.body.gender.trim(),
            username: request.body.username.trim(),
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
let editProfileById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Profiles = typeorm_1.getRepository(Profile_1.Profile);
        var context = {
            profile: null
        };
        let profileId = parseInt(request.params.id);
        if (!profileId || isNaN(profileId)) {
            context.message = "Invalid Route Params";
            context.success = false;
            return response.status(404).json(context);
        }
        if (!request.body.gender || !request.body.username) {
            context.message = "Request Body Keys Missing";
            context.success = false;
            return response.status(404).json(context);
        }
        const profile = yield Profiles.createQueryBuilder("profile").where("profile.id = :id", { id: profileId }).getOne();
        if (profile) {
            yield Profiles.createQueryBuilder().update(Profile_1.Profile)
                .set({ gender: request.body.gender, username: request.body.username })
                .where("id = :id", { id: profileId }).execute();
            const updatedProfile = yield Profiles.createQueryBuilder("profile").where("profile.id = :id", { id: profileId }).getOne();
            context.profile = updatedProfile;
            context.success = true;
            context.message = "Profile Updated";
            return response.status(200).json(context);
        }
        else {
            context.success = false;
            context.message = "Profile Not Found";
            return response.status(404).json(context);
        }
    });
};
let deleteProfileById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Profiles = typeorm_1.getRepository(Profile_1.Profile);
        var context = {};
        let profileId = parseInt(request.params.id);
        if (!profileId || isNaN(profileId)) {
            context.message = "Invalid Route Params";
            context.success = false;
            return response.status(404).json(context);
        }
        const profile = yield Profiles.createQueryBuilder("profile").where("profile.id = :id", { id: profileId }).getOne();
        if (profile) {
            yield Profiles.createQueryBuilder().delete().from(Profile_1.Profile).where("id = :id", { id: profileId }).execute();
            context.message = "Profile Deleted";
            context.success = true;
            return response.status(200).json(context);
        }
        else {
            context.message = "Profile Not Found";
            context.success = false;
            return response.status(404).json(context);
        }
    });
};
let profileController = {
    getAll: getAllProfiles,
    createNewProfile: createProfile,
    getSingleProfile: getProfileById,
    editProfile: editProfileById,
    deleteProfile: deleteProfileById
};
exports.default = profileController;
//# sourceMappingURL=profileController.js.map