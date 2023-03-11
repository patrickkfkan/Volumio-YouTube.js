import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class UpdateLiveChatPollAction extends YTNode {
    static type: string;
    poll_to_update: YTNode | null;
    constructor(data: RawNode);
}
export default UpdateLiveChatPollAction;
