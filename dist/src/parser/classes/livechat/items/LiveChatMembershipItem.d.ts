import { ObservedArray, YTNode } from '../../../helpers.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
declare class LiveChatMembershipItem extends YTNode {
    static type: string;
    id: string;
    timestamp: number;
    header_subtext: Text;
    author: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
        badges: ObservedArray<LiveChatAuthorBadge | MetadataBadge>;
        is_moderator: boolean | null;
        is_verified: boolean | null;
        is_verified_artist: boolean | null;
    };
    menu_endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default LiveChatMembershipItem;
