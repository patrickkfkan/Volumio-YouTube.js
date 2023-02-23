import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class LiveChatItemList extends YTNode {
    constructor(data) {
        super();
        this.max_items_to_display = data.maxItemsToDisplay;
        this.more_comments_below_button = Parser.parseItem(data.moreCommentsBelowButton);
    }
}
LiveChatItemList.type = 'LiveChatItemList';
export default LiveChatItemList;
//# sourceMappingURL=LiveChatItemList.js.map