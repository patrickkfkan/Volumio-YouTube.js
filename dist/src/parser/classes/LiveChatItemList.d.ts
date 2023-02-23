import { YTNode } from '../helpers.js';
import type Button from './Button.js';
declare class LiveChatItemList extends YTNode {
    static type: string;
    max_items_to_display: string;
    more_comments_below_button: Button | null;
    constructor(data: any);
}
export default LiveChatItemList;
