import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class AddChatItemAction extends YTNode {
    static type: string;
    item: YTNode | null;
    client_id: string | null;
    constructor(data: RawNode);
}
export default AddChatItemAction;
