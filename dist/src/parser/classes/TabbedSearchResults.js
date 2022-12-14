"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
const Tab_1 = __importDefault(require("./Tab"));
class TabbedSearchResults extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.tabs = index_1.default.parseArray(data.tabs, Tab_1.default);
    }
}
TabbedSearchResults.type = 'TabbedSearchResults';
exports.default = TabbedSearchResults;
//# sourceMappingURL=TabbedSearchResults.js.map