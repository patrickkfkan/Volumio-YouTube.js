"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class SearchSuggestionsSection extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.contents = index_1.default.parse(data.contents);
    }
}
SearchSuggestionsSection.type = 'SearchSuggestionsSection';
exports.default = SearchSuggestionsSection;
//# sourceMappingURL=SearchSuggestionsSection.js.map