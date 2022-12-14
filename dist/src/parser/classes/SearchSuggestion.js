"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class SearchSuggestion extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.suggestion = new Text_1.default(data.suggestion);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.icon_type = data.icon.iconType;
        if (data.serviceEndpoint) {
            this.service_endpoint = new NavigationEndpoint_1.default(data.serviceEndpoint);
        }
    }
}
SearchSuggestion.type = 'SearchSuggestion';
exports.default = SearchSuggestion;
//# sourceMappingURL=SearchSuggestion.js.map