"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class MetadataRowHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.content = new Text_1.default(data.content);
        this.has_divider_line = data.hasDividerLine;
    }
}
MetadataRowHeader.type = 'MetadataRowHeader';
exports.default = MetadataRowHeader;
//# sourceMappingURL=MetadataRowHeader.js.map