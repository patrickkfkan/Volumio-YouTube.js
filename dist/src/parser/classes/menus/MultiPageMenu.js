"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class MultiPageMenu extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.header = index_1.default.parse(data.header);
        this.sections = index_1.default.parse(data.sections);
        this.style = data.style;
    }
}
MultiPageMenu.type = 'MultiPageMenu';
exports.default = MultiPageMenu;
//# sourceMappingURL=MultiPageMenu.js.map