"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
let bodyParserSetup = function (appInstance) {
    appInstance.use(bodyParser.json());
    appInstance.use(bodyParser.urlencoded({ extended: false }));
};
exports.default = bodyParserSetup;
//# sourceMappingURL=bodyParserSetup.js.map