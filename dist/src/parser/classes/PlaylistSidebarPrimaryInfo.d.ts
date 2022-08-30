import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class PlaylistSidebarPrimaryInfo extends YTNode {
    static type: string;
    stats: Text[];
    thumbnail_renderer: import("../helpers").SuperParsedResult<YTNode>;
    title: Text;
    menu: any;
    endpoint: NavigationEndpoint;
    description: Text;
    constructor(data: any);
}
export default PlaylistSidebarPrimaryInfo;
