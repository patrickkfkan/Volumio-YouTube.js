import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ChannelSubMenu extends YTNode {
    static type: string;
    content_type_sub_menu_items: {
        endpoint: NavigationEndpoint;
        selected: boolean;
        title: string;
    }[];
    sort_setting: YTNode | null;
    constructor(data: any);
}
export default ChannelSubMenu;