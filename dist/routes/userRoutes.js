"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
let userRouter = express_1.Router();
userRouter.get("/", user_1.default.getAll);
userRouter.post("/", user_1.default.createUser);
userRouter.get("/:id", user_1.default.getSingleUser);
userRouter.patch("/:id", user_1.default.editUser);
userRouter.patch("/:id/profile", user_1.default.editUserProfile);
userRouter.delete("/:id", user_1.default.deleteUser);
userRouter.get("/test/pets", user_1.default.createWithDummyPets);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map