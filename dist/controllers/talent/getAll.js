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
const Talent_1 = require("../../models/Talent");
const typeorm_1 = require("typeorm");
let getAllTalents = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Talents = typeorm_1.getRepository(Talent_1.Talent);
        const talentFindOptions = {
            relations: ["pets"]
        };
        const talents = yield Talents.find(talentFindOptions);
        var context = {
            talents: null
        };
        if (talents.length > 0) {
            context.talents = talents;
            context.message = "Fetched Talents from DB";
            context.success = true;
            return response.status(200).json(context);
        }
        else {
            context.message = "There are no Talents in DB";
            context.success = false;
            return response.status(200).json(context);
        }
    });
};
exports.default = getAllTalents;
//# sourceMappingURL=getAll.js.map