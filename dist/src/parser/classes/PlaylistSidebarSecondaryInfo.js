import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class PlaylistSidebarSecondaryInfo extends YTNode {
    constructor(data) {
        super();
        this.owner = Parser.parse(data.videoOwner) || null;
        this.button = Parser.parse(data.button) || null;
    }
}
PlaylistSidebarSecondaryInfo.type = 'PlaylistSidebarSecondaryInfo';
export default PlaylistSidebarSecondaryInfo;
//# sourceMappingURL=PlaylistSidebarSecondaryInfo.js.map