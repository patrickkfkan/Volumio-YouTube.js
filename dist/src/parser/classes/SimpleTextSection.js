"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class SimpleTextSection extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.lines = data.lines.map((line) => new Text_1.default(line));
        this.style = data.layoutStyle;
    }
}
SimpleTextSection.type = 'SimpleTextSection';
exports.default = SimpleTextSection;
//# sourceMappingURL=SimpleTextSection.js.map