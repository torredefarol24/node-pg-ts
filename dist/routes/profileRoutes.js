"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_1 = require("../controllers/profile");
let profileRouter = express_1.Router();
profileRouter.get("/", profile_1.default.getAll);
profileRouter.post("/", profile_1.default.createNewProfile);
profileRouter.get("/:id", profile_1.default.getSingleProfile);
profileRouter.patch("/:id", profile_1.default.editProfile);
profileRouter.delete("/:id", profile_1.default.deleteProfile);
exports.default = profileRouter;
//# sourceMappingURL=profileRoutes.js.map