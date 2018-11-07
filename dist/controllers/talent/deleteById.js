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
let deleteTalentById = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Talents = typeorm_1.getRepository(Talent_1.Talent);
        var context = {};
        let talentId = parseInt(request.params.id);
        if (!talentId || isNaN(talentId)) {
            context.message = "Invalid Route Params";
            context.success = false;
            return response.status(404).json(context);
        }
        const talent = yield Talents.createQueryBuilder("talent").where("talent.id = :id", { id: talentId }).getOne();
        if (talent) {
            yield Talents.createQueryBuilder().delete().from(Talent_1.Talent).where("id = :id", { id: talentId }).execute();
            context.message = "Talent Deleted";
            context.success = true;
            return response.status(200).json(context);
        }
        else {
            context.message = "Talent Not Found";
            context.success = false;
            return response.status(404).json(context);
        }
    });
};
exports.default = deleteTalentById;
//# sourceMappingURL=deleteById.js.map