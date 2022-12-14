import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class CollaboratorInfoCardContent extends YTNode {
    static type: string;
    channel_avatar: Thumbnail[];
    custom_text: Text;
    channel_name: Text;
    subscriber_count: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default CollaboratorInfoCardContent;
