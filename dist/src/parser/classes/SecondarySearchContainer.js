"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class SecondarySearchContainer extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.contents = index_1.default.parse(data.contents);
    }
}
SecondarySearchContainer.type = 'SecondarySearchContainer';
exports.default = SecondarySearchContainer;
//# sourceMappingURL=SecondarySearchContainer.js.map