import Parser from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class PlaylistSidebarPrimaryInfo extends YTNode {
    constructor(data) {
        super();
        this.stats = data.stats.map((stat) => new Text(stat));
        this.thumbnail_renderer = Parser.parse(data.thumbnailRenderer);
        this.title = new Text(data.title);
        this.menu = Parser.parseItem(data.menu);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.description = new Text(data.description);
    }
}
PlaylistSidebarPrimaryInfo.type = 'PlaylistSidebarPrimaryInfo';
export default PlaylistSidebarPrimaryInfo;
//# sourceMappingURL=PlaylistSidebarPrimaryInfo.js.map