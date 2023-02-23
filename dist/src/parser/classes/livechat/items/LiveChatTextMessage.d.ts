import { ObservedArray, YTNode } from '../../../helpers.js';
import Button from '../../Button.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
declare class LiveChatTextMessage extends YTNode {
    static type: string;
    message: Text;
    author?: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
        badges: ObservedArray<LiveChatAuthorBadge | MetadataBadge>;
        is_moderator: boolean | null;
        is_verified: boolean | null;
        is_verified_artist: boolean | null;
    };
    menu_endpoint?: NavigationEndpoint;
    inline_action_buttons: ObservedArray<Button>;
    timestamp: number;
    id: string;
    constructor(data: any);
}
export default LiveChatTextMessage;
