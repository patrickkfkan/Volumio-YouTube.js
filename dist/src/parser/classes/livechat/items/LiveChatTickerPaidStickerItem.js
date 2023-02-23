import Parser from '../../../index.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import { observe, YTNode } from '../../../helpers.js';
class LiveChatTickerPaidStickerItem extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.author = {
            id: data.authorExternalChannelId,
            name: new Text(data === null || data === void 0 ? void 0 : data.authorName),
            thumbnails: Thumbnail.fromResponse(data.authorPhoto),
            badges: observe([]).as(LiveChatAuthorBadge, MetadataBadge),
            is_moderator: null,
            is_verified: null,
            is_verified_artist: null
        };
        const badges = Parser.parseArray(data.authorBadges, [MetadataBadge, LiveChatAuthorBadge]);
        this.author.badges = badges;
        this.author.is_moderator = badges ? badges.some((badge) => badge.icon_type == 'MODERATOR') : null;
        this.author.is_verified = badges ? badges.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') : null;
        this.author.is_verified_artist = badges ? badges.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST') : null;
        this.amount = new Text(data.amount);
        this.duration_sec = data.durationSec;
        this.full_duration_sec = data.fullDurationSec;
        this.show_item = Parser.parseItem((_b = (_a = data.showItemEndpoint) === null || _a === void 0 ? void 0 : _a.showLiveChatItemEndpoint) === null || _b === void 0 ? void 0 : _b.renderer);
        this.show_item_endpoint = new NavigationEndpoint(data.showItemEndpoint);
        this.id = data.id;
    }
}
LiveChatTickerPaidStickerItem.type = 'LiveChatTickerPaidStickerItem';
export default LiveChatTickerPaidStickerItem;
//# sourceMappingURL=LiveChatTickerPaidStickerItem.js.map