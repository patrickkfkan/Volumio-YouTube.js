"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ExpandableTab extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.endpoint = new NavigationEndpoint_1.default(data.endpoint);
        this.selected = data.selected; // If this.selected then we may have content else we do not
        this.content = data.content ? index_1.default.parse(data.content) : null;
    }
}
ExpandableTab.type = 'ExpandableTab';
exports.default = ExpandableTab;
//# sourceMappingURL=ExpandableTab.js.map