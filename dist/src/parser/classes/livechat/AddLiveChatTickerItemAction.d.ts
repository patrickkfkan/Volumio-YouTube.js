import { YTNode } from '../../helpers.js';
declare class AddLiveChatTickerItemAction extends YTNode {
    static type: string;
    item: YTNode | null;
    duration_sec: string;
    constructor(data: any);
}
export default AddLiveChatTickerItemAction;
