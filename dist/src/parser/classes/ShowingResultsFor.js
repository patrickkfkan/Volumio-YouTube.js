"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ShowingResultsFor extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.corrected_query = new Text_1.default(data.correctedQuery);
        this.endpoint = new NavigationEndpoint_1.default(data.correctedQueryEndpoint);
        this.original_query_endpoint = new NavigationEndpoint_1.default(data.originalQueryEndpoint);
        // Required by ytmusic plugin
        this.original_query = new Text_1.default(data.originalQuery);
        this.showing_results_for = new Text_1.default(data.showingResultsFor);
        this.search_instead_for = new Text_1.default(data.searchInsteadFor);
    }
}
ShowingResultsFor.type = 'ShowingResultsFor';
exports.default = ShowingResultsFor;
//# sourceMappingURL=ShowingResultsFor.js.map