"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class HorizontalList extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.visible_item_count = data.visibleItemCount;
        this.items = index_1.default.parse(data.items);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
HorizontalList.type = 'HorizontalList';
exports.default = HorizontalList;
//# sourceMappingURL=HorizontalList.js.map