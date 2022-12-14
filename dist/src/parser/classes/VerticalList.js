"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class VerticalList extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.items = index_1.default.parse(data.items);
        this.collapsed_item_count = data.collapsedItemCount;
        this.collapsed_state_button_text = new Text_1.default(data.collapsedStateButtonText);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
VerticalList.type = 'VerticalList';
exports.default = VerticalList;
//# sourceMappingURL=VerticalList.js.map