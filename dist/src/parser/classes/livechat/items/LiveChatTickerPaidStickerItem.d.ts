import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import type { RawNode } from '../../../index.js';
import { ObservedArray, YTNode } from '../../../helpers.js';
declare class LiveChatTickerPaidStickerItem extends YTNode {
    static type: string;
    author: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
        badges: ObservedArray<LiveChatAuthorBadge | MetadataBadge>;
        is_moderator: boolean | null;
        is_verified: boolean | null;
        is_verified_artist: boolean | null;
    };
    amount: Text;
    duration_sec: string;
    full_duration_sec: string;
    show_item: YTNode | null;
    show_item_endpoint: NavigationEndpoint;
    id: string;
    constructor(data: RawNode);
}
export default LiveChatTickerPaidStickerItem;
