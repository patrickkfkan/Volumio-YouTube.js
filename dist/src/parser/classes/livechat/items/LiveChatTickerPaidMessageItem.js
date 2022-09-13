"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../../misc/Text"));
const Thumbnail_1 = __importDefault(require("../../misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("../../NavigationEndpoint"));
const MetadataBadge_1 = __importDefault(require("../../MetadataBadge"));
const LiveChatAuthorBadge_1 = __importDefault(require("../../LiveChatAuthorBadge"));
const index_1 = __importDefault(require("../../../index"));
const helpers_1 = require("../../../helpers");
class LiveChatTickerPaidMessageItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.author = {
            id: data.authorExternalChannelId,
            thumbnails: Thumbnail_1.default.fromResponse(data.authorPhoto),
            badges: index_1.default.parseArray(data.authorBadges, [MetadataBadge_1.default, LiveChatAuthorBadge_1.default]),
            is_moderator: null,
            is_verified: null,
            is_verified_artist: null
        };
        const badges = index_1.default.parseArray(data.authorBadges, [MetadataBadge_1.default, LiveChatAuthorBadge_1.default]);
        this.author.badges = badges;
        this.author.is_moderator = (badges === null || badges === void 0 ? void 0 : badges.some((badge) => badge.icon_type == 'MODERATOR')) || null;
        this.author.is_verified = (badges === null || badges === void 0 ? void 0 : badges.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED')) || null;
        this.author.is_verified_artist = (badges === null || badges === void 0 ? void 0 : badges.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST')) || null;
        this.amount = new Text_1.default(data.amount);
        this.duration_sec = data.durationSec;
        this.full_duration_sec = data.fullDurationSec;
        this.show_item = index_1.default.parse(data.showItemEndpoint.showLiveChatItemEndpoint.renderer);
        this.show_item_endpoint = new NavigationEndpoint_1.default(data.showItemEndpoint);
        this.id = data.id;
    }
}
LiveChatTickerPaidMessageItem.type = 'LiveChatTickerPaidMessageItem';
exports.default = LiveChatTickerPaidMessageItem;
//# sourceMappingURL=LiveChatTickerPaidMessageItem.js.map