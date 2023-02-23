import { observe, YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
class LiveChatPaidSticker extends YTNode {
    constructor(data) {
        super();
        this.id = data.id;
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
        this.money_chip_background_color = data.moneyChipBackgroundColor;
        this.money_chip_text_color = data.moneyChipTextColor;
        this.background_color = data.backgroundColor;
        this.author_name_text_color = data.authorNameTextColor;
        this.sticker = Thumbnail.fromResponse(data.sticker);
        this.purchase_amount = new Text(data.purchaseAmountText).toString();
        this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
        this.context_menu = this.menu_endpoint;
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    }
}
LiveChatPaidSticker.type = 'LiveChatPaidSticker';
export default LiveChatPaidSticker;
//# sourceMappingURL=LiveChatPaidSticker.js.map