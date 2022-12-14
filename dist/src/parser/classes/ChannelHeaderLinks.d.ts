import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class HeaderLink {
    endpoint: NavigationEndpoint;
    icon: Thumbnail[];
    title: Text;
    constructor(data: any);
}
declare class ChannelHeaderLinks extends YTNode {
    static type: string;
    primary: HeaderLink[];
    secondary: HeaderLink[];
    constructor(data: any);
}
export default ChannelHeaderLinks;
