"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const SectionList_1 = __importDefault(require("./SectionList"));
const MusicQueue_1 = __importDefault(require("./MusicQueue"));
const RichGrid_1 = __importDefault(require("./RichGrid"));
const helpers_1 = require("../helpers");
class Tab extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = data.title || 'N/A';
        this.selected = data.selected || false;
        this.endpoint = new NavigationEndpoint_1.default(data.endpoint);
        this.content = index_1.default.parseItem(data.content, [SectionList_1.default, MusicQueue_1.default, RichGrid_1.default]);
    }
}
Tab.type = 'Tab';
exports.default = Tab;
//# sourceMappingURL=Tab.js.map