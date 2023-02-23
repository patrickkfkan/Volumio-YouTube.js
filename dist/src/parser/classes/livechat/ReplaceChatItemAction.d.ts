import { YTNode } from '../../helpers.js';
declare class ReplaceChatItemAction extends YTNode {
    static type: string;
    target_item_id: string;
    replacement_item: YTNode | null;
    constructor(data: any);
}
export default ReplaceChatItemAction;
