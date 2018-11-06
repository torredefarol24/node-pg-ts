"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = require("../controllers/profileController");
let profileRouter = express_1.Router();
profileRouter.get("/", profileController_1.default.getAll);
profileRouter.post("/", profileController_1.default.createNewProfile);
profileRouter.get("/:id", profileController_1.default.getSingleProfile);
profileRouter.patch("/:id", profileController_1.default.editProfile);
profileRouter.delete("/:id", profileController_1.default.deleteProfile);
exports.default = profileRouter;
//# sourceMappingURL=profileRoutes.js.map