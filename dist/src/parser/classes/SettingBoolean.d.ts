import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class SettingBoolean extends YTNode {
    static type: string;
    title?: Text;
    summary?: Text;
    enable_endpoint?: NavigationEndpoint;
    disable_endpoint?: NavigationEndpoint;
    item_id: string;
    constructor(data: any);
}
export default SettingBoolean;
