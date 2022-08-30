import { YTNode } from '../helpers';
declare class LiveChatItemList extends YTNode {
    static type: string;
    max_items_to_display: string;
    more_comments_below_button: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default LiveChatItemList;
