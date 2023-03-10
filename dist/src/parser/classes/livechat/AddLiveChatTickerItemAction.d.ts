import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class AddLiveChatTickerItemAction extends YTNode {
    static type: string;
    item: YTNode | null;
    duration_sec: string;
    constructor(data: RawNode);
}
export default AddLiveChatTickerItemAction;
