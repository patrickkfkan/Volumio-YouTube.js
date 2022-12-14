"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class SearchRefinementCard extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint_1.default(data.searchEndpoint);
        this.query = new Text_1.default(data.query).toString();
    }
}
SearchRefinementCard.type = 'SearchRefinementCard';
exports.default = SearchRefinementCard;
//# sourceMappingURL=SearchRefinementCard.js.map