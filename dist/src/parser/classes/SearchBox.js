"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class SearchBox extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.endpoint = new NavigationEndpoint_1.default(data.endpoint);
        this.search_button = index_1.default.parse(data.searchButton);
        this.clear_button = index_1.default.parse(data.clearButton);
        this.placeholder_text = new Text_1.default(data.placeholderText);
    }
}
SearchBox.type = 'SearchBox';
exports.default = SearchBox;
//# sourceMappingURL=SearchBox.js.map