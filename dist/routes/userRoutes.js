"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
let userRouter = express_1.Router();
userRouter.get("/", userController_1.default.getAll);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map