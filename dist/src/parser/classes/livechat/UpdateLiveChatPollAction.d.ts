import { YTNode } from '../../helpers.js';
declare class UpdateLiveChatPollAction extends YTNode {
    static type: string;
    poll_to_update: YTNode | null;
    constructor(data: any);
}
export default UpdateLiveChatPollAction;
