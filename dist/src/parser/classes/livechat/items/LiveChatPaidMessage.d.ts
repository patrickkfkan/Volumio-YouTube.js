import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import NavigationEndpoint from '../../NavigationEndpoint';
import MetadataBadge from '../../MetadataBadge';
import { YTNode } from '../../../helpers';
declare class LiveChatPaidMessage extends YTNode {
    static type: string;
    message: Text;
    author: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
        badges: MetadataBadge[];
        is_moderator: boolean | null;
        is_verified: boolean | null;
        is_verified_artist: boolean | null;
    };
    purchase_amount: string;
    menu_endpoint: NavigationEndpoint;
    timestamp: number;
    timestamp_text: string;
    id: string;
    constructor(data: any);
}
export default LiveChatPaidMessage;
