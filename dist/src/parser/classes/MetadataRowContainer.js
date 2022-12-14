"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class MetadataRowContainer extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.rows = index_1.default.parseArray(data.rows);
        this.collapsed_item_count = data.collapsedItemCount;
    }
}
MetadataRowContainer.type = 'MetadataRowContainer';
exports.default = MetadataRowContainer;
//# sourceMappingURL=MetadataRowContainer.js.map