"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const ItemSectionHeader_1 = __importDefault(require("./ItemSectionHeader"));
const helpers_1 = require("../helpers");
const ItemSectionTabbedHeader_1 = __importDefault(require("./ItemSectionTabbedHeader"));
class ItemSection extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.header = index_1.default.parseItem(data.header, [ItemSectionHeader_1.default, ItemSectionTabbedHeader_1.default]);
        this.contents = index_1.default.parse(data.contents, true);
        if (data.targetId || data.sectionIdentifier) {
            this.target_id = (data === null || data === void 0 ? void 0 : data.target_id) || (data === null || data === void 0 ? void 0 : data.sectionIdentifier);
        }
    }
}
ItemSection.type = 'ItemSection';
exports.default = ItemSection;
//# sourceMappingURL=ItemSection.js.map