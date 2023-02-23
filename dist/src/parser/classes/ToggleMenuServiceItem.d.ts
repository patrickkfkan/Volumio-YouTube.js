import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ToggleMenuServiceItem extends YTNode {
    static type: string;
    text: Text;
    toggled_text: Text;
    icon_type: string;
    toggled_icon_type: string;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ToggleMenuServiceItem;
