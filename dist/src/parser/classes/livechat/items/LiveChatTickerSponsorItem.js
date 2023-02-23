import Parser from '../../../index.js';
import { observe, YTNode } from '../../../helpers.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
class LiveChatTickerSponsorItem extends YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.detail = new Text(data.detailText);
        this.author = {
            id: data.authorExternalChannelId,
            name: new Text(data === null || data === void 0 ? void 0 : data.authorName),
            thumbnails: Thumbnail.fromResponse(data.sponsorPhoto),
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
        this.duration_sec = data.durationSec;
        // TODO: finish this
    }
}
LiveChatTickerSponsorItem.type = 'LiveChatTickerSponsorItem';
export default LiveChatTickerSponsorItem;
//# sourceMappingURL=LiveChatTickerSponsorItem.js.map