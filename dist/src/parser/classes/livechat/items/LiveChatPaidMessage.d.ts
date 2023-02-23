import { ObservedArray, YTNode } from '../../../helpers.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
declare class LiveChatPaidMessage extends YTNode {
    static type: string;
    message: Text;
    author: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
        badges: ObservedArray<LiveChatAuthorBadge | MetadataBadge>;
        is_moderator: boolean | null;
        is_verified: boolean | null;
        is_verified_artist: boolean | null;
    };
    header_background_color: number;
    header_text_color: number;
    body_background_color: number;
    body_text_color: number;
    purchase_amount: string;
    menu_endpoint: NavigationEndpoint;
    timestamp: number;
    timestamp_text: string;
    id: string;
    constructor(data: any);
}
export default LiveChatPaidMessage;
