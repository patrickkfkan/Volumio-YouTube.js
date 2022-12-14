"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
const ItemSectionTab_1 = __importDefault(require("./ItemSectionTab"));
const __1 = __importDefault(require(".."));
class ItemSectionTabbedHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.tabs = __1.default.parseArray(data.tabs, ItemSectionTab_1.default);
        if (data.endItems) {
            this.end_items = __1.default.parseArray(data.endItems);
        }
    }
}
ItemSectionTabbedHeader.type = 'ItemSectionTabbedHeader';
exports.default = ItemSectionTabbedHeader;
//# sourceMappingURL=ItemSectionTabbedHeader.js.map