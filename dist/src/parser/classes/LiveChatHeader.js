import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class LiveChatHeader extends YTNode {
    constructor(data) {
        super();
        this.overflow_menu = Parser.parseItem(data.overflowMenu);
        this.collapse_button = Parser.parseItem(data.collapseButton);
        this.view_selector = Parser.parseItem(data.viewSelector);
    }
}
LiveChatHeader.type = 'LiveChatHeader';
export default LiveChatHeader;
//# sourceMappingURL=LiveChatHeader.js.map