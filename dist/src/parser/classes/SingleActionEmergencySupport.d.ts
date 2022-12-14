import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class SingleActionEmergencySupport extends YTNode {
    static type: string;
    action_text: Text;
    nav_text: Text;
    details: Text;
    icon_type: string;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SingleActionEmergencySupport;
