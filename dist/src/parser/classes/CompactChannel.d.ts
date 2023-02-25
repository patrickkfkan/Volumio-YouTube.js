import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type Menu from './menus/Menu.js';
import { YTNode } from '../helpers.js';
declare class CompactChannel extends YTNode {
    static type: string;
    title: Text;
    channel_id: string;
    thumbnail: Thumbnail[];
    display_name: Text;
    video_count: Text;
    subscriber_count: Text;
    endpoint: NavigationEndpoint;
    tv_banner: Thumbnail[];
    menu: Menu | null;
    constructor(data: any);
}
export default CompactChannel;