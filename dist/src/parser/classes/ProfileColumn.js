"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class ProfileColumn extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.items = index_1.default.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
ProfileColumn.type = 'ProfileColumn';
exports.default = ProfileColumn;
//# sourceMappingURL=ProfileColumn.js.map