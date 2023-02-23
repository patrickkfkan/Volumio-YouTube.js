import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class PlaylistSidebarPrimaryInfo extends YTNode {
    static type: string;
    stats: Text[];
    thumbnail_renderer: import("../helpers.js").SuperParsedResult<YTNode>;
    title: Text;
    menu: YTNode | null;
    endpoint: NavigationEndpoint;
    description: Text;
    constructor(data: any);
}
export default PlaylistSidebarPrimaryInfo;
