import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class SimpleCardContent extends YTNode {
    static type: string;
    image: Thumbnail[];
    title: Text;
    display_domain: Text;
    show_link_icon: boolean;
    call_to_action: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SimpleCardContent;
