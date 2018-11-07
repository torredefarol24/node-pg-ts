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
let editTalentById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Talents = typeorm_1.getRepository(Talent_1.Talent);
        var context = {
            talent: null
        };
        let talentId = parseInt(request.params.id);
        if (!talentId || isNaN(talentId)) {
            context.message = "Invalid Route Params";
            context.success = false;
            return response.status(404).json(context);
        }
        if (!request.body.name) {
            context.message = "Request Body Keys Missing";
            context.success = false;
            return response.status(404).json(context);
        }
        const talent = yield Talents.createQueryBuilder("talent").where("talent.id = :id", { id: talentId }).getOne();
        if (talent) {
            let talentParams = {
                name: request.body.name.trim()
            };
            yield Talents.createQueryBuilder().update(Talent_1.Talent)
                .set(talentParams)
                .where("id = :id", { id: talentId }).execute();
            const updatedTalent = yield Talents.createQueryBuilder("talent").where("talent.id = :id", { id: talentId }).getOne();
            context.talent = updatedTalent;
            context.success = true;
            context.message = "Talent Updated";
            return response.status(200).json(context);
        }
        else {
            context.success = false;
            context.message = "Talent Not Found";
            return response.status(404).json(context);
        }
    });
};
exports.default = editTalentById;
//# sourceMappingURL=editById.js.map