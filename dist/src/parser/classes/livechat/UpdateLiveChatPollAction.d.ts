import { YTNode } from '../../helpers';
declare class UpdateLiveChatPollAction extends YTNode {
    static type: string;
    poll_to_update: import("../../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default UpdateLiveChatPollAction;
