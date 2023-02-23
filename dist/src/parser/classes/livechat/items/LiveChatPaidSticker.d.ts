import { ObservedArray, YTNode } from '../../../helpers.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';
import MetadataBadge from '../../MetadataBadge.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
declare class LiveChatPaidSticker extends YTNode {
    static type: string;
    id: string;
    author: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
        badges: ObservedArray<LiveChatAuthorBadge | MetadataBadge>;
        is_moderator: boolean | null;
        is_verified: boolean | null;
        is_verified_artist: boolean | null;
    };
    money_chip_background_color: number;
    money_chip_text_color: number;
    background_color: number;
    author_name_text_color: number;
    sticker: Thumbnail[];
    purchase_amount: string;
    context_menu: NavigationEndpoint;
    menu_endpoint?: NavigationEndpoint;
    timestamp: number;
    constructor(data: any);
}
export default LiveChatPaidSticker;
