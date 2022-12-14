"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("./misc/Author"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class WatchCardRichHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.title_endpoint = new NavigationEndpoint_1.default(data.titleNavigationEndpoint);
        this.subtitle = new Text_1.default(data.subtitle);
        this.author = new Author_1.default(data, data.titleBadge ? [data.titleBadge] : null, data.avatar);
        this.author.name = this.title.toString();
        this.style = data.style;
    }
}
WatchCardRichHeader.type = 'WatchCardRichHeader';
exports.default = WatchCardRichHeader;
//# sourceMappingURL=WatchCardRichHeader.js.map