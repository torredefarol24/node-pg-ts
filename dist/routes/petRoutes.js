"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pet_1 = require("../controllers/pet");
let petRouter = express_1.Router();
petRouter.get("/", pet_1.default.getAllPets);
petRouter.post("/", pet_1.default.createNewPet);
petRouter.get("/:id", pet_1.default.getSinglePet);
petRouter.patch("/:id", pet_1.default.editSinglePet);
petRouter.delete("/:id", pet_1.default.deleteSinglePet);
petRouter.post("/static", pet_1.default.createWithStaticUser);
exports.default = petRouter;
//# sourceMappingURL=petRoutes.js.map