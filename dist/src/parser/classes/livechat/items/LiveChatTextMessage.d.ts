import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import NavigationEndpoint from '../../NavigationEndpoint';
import MetadataBadge from '../../MetadataBadge';
import { YTNode } from '../../../helpers';
declare class LiveChatTextMessage extends YTNode {
    static type: string;
    message: Text;
    author?: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
        badges: MetadataBadge[];
        is_moderator: boolean | null;
        is_verified: boolean | null;
        is_verified_artist: boolean | null;
    };
    menu_endpoint?: NavigationEndpoint;
    timestamp: number;
    id: string;
    constructor(data: any);
}
export default LiveChatTextMessage;
