import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class ChannelOptions extends YTNode {
    static type: string;
    avatar: Thumbnail[];
    endpoint: NavigationEndpoint;
    name: string;
    links: Text[];
    constructor(data: any);
}
export default ChannelOptions;
