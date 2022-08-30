import { YTNode } from '../../helpers';
declare class ReplaceChatItemAction extends YTNode {
    static type: string;
    target_item_id: string;
    replacement_item: import("../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default ReplaceChatItemAction;
