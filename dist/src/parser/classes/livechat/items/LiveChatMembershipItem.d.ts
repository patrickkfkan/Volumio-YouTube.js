import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import NavigationEndpoint from '../../NavigationEndpoint';
import { YTNode } from '../../../helpers';
declare class LiveChatMembershipItem extends YTNode {
    static type: string;
    id: string;
    timestamp: number;
    header_subtext: Text;
    author: {
        id: string;
        name: Text;
        thumbnails: Thumbnail[];
        badges: any;
    };
    menu_endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default LiveChatMembershipItem;
