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
let createTalent = function (request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const Talents = typeorm_1.getRepository(Talent_1.Talent);
        var context = {};
        if (!request.body.name) {
            context.message = "Request Body Keys Missing";
            return response.status(404).json(context);
        }
        const talent = {
            name: request.body.name.trim()
        };
        try {
            let result = yield Talents.save(talent);
            context.talent = result;
            context.message = "Talent Created";
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
exports.default = createTalent;
//# sourceMappingURL=createNew.js.map