"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = require("../routes/userRoutes");
const profileRoutes_1 = require("../routes/profileRoutes");
const petRoutes_1 = require("../routes/petRoutes");
const talentRoutes_1 = require("../routes/talentRoutes");
let routerBootstrap = function (appInstance) {
    appInstance.use("/api/users", userRoutes_1.default);
    appInstance.use("/api/profiles", profileRoutes_1.default);
    appInstance.use("/api/pets", petRoutes_1.default);
    appInstance.use("/api/talents", talentRoutes_1.default);
};
exports.default = routerBootstrap;
//# sourceMappingURL=routeSetup.js.map