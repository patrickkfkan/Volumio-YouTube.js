import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class ShowLiveChatDialogAction extends YTNode {
    static type: string;
    dialog: YTNode | null;
    constructor(data: RawNode);
}
export default ShowLiveChatDialogAction;
