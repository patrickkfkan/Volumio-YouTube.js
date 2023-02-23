import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import Menu from './menus/Menu.js';
class VideoPrimaryInfo extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.super_title_link = new Text(data.superTitleLink);
        this.view_count = new Text(data.viewCount.videoViewCountRenderer.viewCount);
        this.short_view_count = new Text(data.viewCount.videoViewCountRenderer.shortViewCount);
        this.published = new Text(data.dateText);
        this.menu = Parser.parseItem(data.videoActions, Menu);
    }
}
VideoPrimaryInfo.type = 'VideoPrimaryInfo';
export default VideoPrimaryInfo;
//# sourceMappingURL=VideoPrimaryInfo.js.map