import { observe, YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
class LiveChatPaidMessage extends YTNode {
    constructor(data) {
        super();
        this.message = new Text(data.message);
        this.author = {
            id: data.authorExternalChannelId,
            name: new Text(data.authorName),
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
        this.header_background_color = data.headerBackgroundColor;
        this.header_text_color = data.headerTextColor;
        this.body_background_color = data.bodyBackgroundColor;
        this.body_text_color = data.bodyTextColor;
        this.purchase_amount = new Text(data.purchaseAmountText).toString();
        this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
        this.timestamp_text = new Text(data.timestampText).toString();
        this.id = data.id;
    }
}
LiveChatPaidMessage.type = 'LiveChatPaidMessage';
export default LiveChatPaidMessage;
//# sourceMappingURL=LiveChatPaidMessage.js.map