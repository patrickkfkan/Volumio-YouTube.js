import { YTNode } from '../../helpers.js';
declare class AppendContinuationItemsAction extends YTNode {
    static type: string;
    items: import("../../helpers.js").SuperParsedResult<YTNode>;
    target: string;
    constructor(data: any);
}
export default AppendContinuationItemsAction;
