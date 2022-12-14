"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class RichItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        // TODO: check this
        this.content = index_1.default.parse(data.content);
    }
}
RichItem.type = 'RichItem';
exports.default = RichItem;
//# sourceMappingURL=RichItem.js.map