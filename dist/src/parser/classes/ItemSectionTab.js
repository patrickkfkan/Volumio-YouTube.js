"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
const Text_1 = __importDefault(require("./misc/Text"));
class ItemSectionTab extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.selected = data.selected || false;
        this.endpoint = new NavigationEndpoint_1.default(data.endpoint);
    }
}
ItemSectionTab.type = 'Tab';
exports.default = ItemSectionTab;
//# sourceMappingURL=ItemSectionTab.js.map