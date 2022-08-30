"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Author_1 = __importDefault(require("./misc/Author"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class C4TabbedHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.author = new Author_1.default({
            simpleText: data.title,
            navigationEndpoint: data.navigationEndpoint
        }, data.badges, data.avatar);
        this.banner = data.banner ? Thumbnail_1.default.fromResponse(data.banner) : [];
        this.tv_banner = data.tvBanner ? Thumbnail_1.default.fromResponse(data.tvBanner) : [];
        this.mobile_banner = data.mobileBanner ? Thumbnail_1.default.fromResponse(data.mobileBanner) : [];
        this.subscribers = new Text_1.default(data.subscriberCountText);
        this.sponsor_button = data.sponsorButton ? index_1.default.parseItem(data.sponsorButton) : undefined;
        this.subscribe_button = data.subscribeButton ? index_1.default.parseItem(data.subscribeButton) : undefined;
        this.header_links = data.headerLinks ? index_1.default.parse(data.headerLinks) : undefined;
    }
}
C4TabbedHeader.type = 'C4TabbedHeader';
exports.default = C4TabbedHeader;
//# sourceMappingURL=C4TabbedHeader.js.map