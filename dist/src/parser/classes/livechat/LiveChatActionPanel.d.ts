import { YTNode } from '../../helpers.js';
declare class LiveChatActionPanel extends YTNode {
    static type: string;
    id: string;
    contents: import("../../helpers.js").SuperParsedResult<YTNode>;
    target_id: string;
    constructor(data: any);
}
export default LiveChatActionPanel;
