"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class VerticalWatchCardList extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.items = index_1.default.parse(data.items);
        this.contents = this.items; // XXX: alias for consistency
        this.view_all_text = new Text_1.default(data.viewAllText);
        this.view_all_endpoint = new NavigationEndpoint_1.default(data.viewAllEndpoint);
    }
}
VerticalWatchCardList.type = 'VerticalWatchCardList';
exports.default = VerticalWatchCardList;
//# sourceMappingURL=VerticalWatchCardList.js.map