import { observe, YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import Button from '../../Button.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
class LiveChatTextMessage extends YTNode {
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
        this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
        this.inline_action_buttons = Parser.parseArray(data.inlineActionButtons, [Button]);
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
        this.id = data.id;
    }
}
LiveChatTextMessage.type = 'LiveChatTextMessage';
export default LiveChatTextMessage;
//# sourceMappingURL=LiveChatTextMessage.js.map