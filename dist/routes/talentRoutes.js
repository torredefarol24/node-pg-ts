"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const talent_1 = require("../controllers/talent");
let talentRouter = express_1.Router();
talentRouter.get("/", talent_1.default.getAllTalents);
talentRouter.post("/", talent_1.default.createNewTalent);
talentRouter.get("/:id", talent_1.default.getSingleTalent);
talentRouter.patch("/:id", talent_1.default.editTalent);
talentRouter.delete("/:id", talent_1.default.deleteTalent);
talentRouter.get("/test/pets", talent_1.default.createPetsWithDummyTalents);
exports.default = talentRouter;
//# sourceMappingURL=talentRoutes.js.map