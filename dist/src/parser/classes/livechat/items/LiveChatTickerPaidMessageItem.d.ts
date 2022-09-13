import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import NavigationEndpoint from '../../NavigationEndpoint';
import MetadataBadge from '../../MetadataBadge';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge';
import { YTNode } from '../../../helpers';
declare class LiveChatTickerPaidMessageItem extends YTNode {
    static type: string;
    author: {
        id: string;
        thumbnails: Thumbnail[];
        badges: LiveChatAuthorBadge[] | MetadataBadge[];
        is_moderator: boolean | null;
        is_verified: boolean | null;
        is_verified_artist: boolean | null;
    };
    amount: Text;
    duration_sec: string;
    full_duration_sec: string;
    show_item: import("../../../helpers").SuperParsedResult<YTNode>;
    show_item_endpoint: NavigationEndpoint;
    id: string;
    constructor(data: any);
}
export default LiveChatTickerPaidMessageItem;
