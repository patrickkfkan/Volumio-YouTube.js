import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class ReplaceChatItemAction extends YTNode {
    static type: string;
    target_item_id: string;
    replacement_item: YTNode | null;
    constructor(data: RawNode);
}
export default ReplaceChatItemAction;
