import { YTNode } from '../../../helpers';
declare class LiveChatBanner extends YTNode {
    static type: string;
    header: import("../../../helpers").SuperParsedResult<YTNode>;
    contents: import("../../../helpers").SuperParsedResult<YTNode>;
    action_id: string;
    viewer_is_creator: boolean;
    target_id: string;
    is_stackable: boolean;
    background_type: string;
    constructor(data: any);
}
export default LiveChatBanner;
