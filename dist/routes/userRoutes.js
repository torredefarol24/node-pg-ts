"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
let userRouter = express_1.Router();
userRouter.get("/", userController_1.default.getAll);
userRouter.post("/", userController_1.default.createUser);
userRouter.get("/:id", userController_1.default.getSingleUser);
userRouter.patch("/:id", userController_1.default.editUser);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map