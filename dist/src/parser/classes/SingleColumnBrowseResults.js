"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Tab_1 = __importDefault(require("./Tab"));
const helpers_1 = require("../helpers");
class SingleColumnBrowseResults extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.tabs = index_1.default.parseArray(data.tabs, Tab_1.default);
    }
}
SingleColumnBrowseResults.type = 'SingleColumnBrowseResults';
exports.default = SingleColumnBrowseResults;
//# sourceMappingURL=SingleColumnBrowseResults.js.map