"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const Text_1 = __importDefault(require("../misc/Text"));
const helpers_1 = require("../../helpers");
class SimpleMenuHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.buttons = index_1.default.parse(data.buttons);
    }
}
SimpleMenuHeader.type = 'SimpleMenuHeader';
exports.default = SimpleMenuHeader;
//# sourceMappingURL=SimpleMenuHeader.js.map