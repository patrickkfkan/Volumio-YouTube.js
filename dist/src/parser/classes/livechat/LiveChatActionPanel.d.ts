import { YTNode } from '../../helpers';
declare class LiveChatActionPanel extends YTNode {
    static type: string;
    id: string;
    contents: import("../../helpers").SuperParsedResult<YTNode>;
    target_id: string;
    constructor(data: any);
}
export default LiveChatActionPanel;
