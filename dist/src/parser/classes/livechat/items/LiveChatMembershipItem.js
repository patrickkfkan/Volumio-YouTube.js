"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../../index"));
const Text_1 = __importDefault(require("../../misc/Text"));
const Thumbnail_1 = __importDefault(require("../../misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("../../NavigationEndpoint"));
const helpers_1 = require("../../../helpers");
class LiveChatMembershipItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
        this.header_subtext = new Text_1.default(data.headerSubtext);
        this.author = {
            id: data.authorExternalChannelId,
            name: new Text_1.default(data === null || data === void 0 ? void 0 : data.authorName),
            thumbnails: Thumbnail_1.default.fromResponse(data.authorPhoto),
            badges: index_1.default.parse(data.authorBadges)
        };
        this.menu_endpoint = new NavigationEndpoint_1.default(data.contextMenuEndpoint);
    }
}
LiveChatMembershipItem.type = 'LiveChatMembershipItem';
exports.default = LiveChatMembershipItem;
//# sourceMappingURL=LiveChatMembershipItem.js.map