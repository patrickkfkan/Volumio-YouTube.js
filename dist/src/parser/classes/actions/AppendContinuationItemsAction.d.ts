import { YTNode } from '../../helpers';
declare class AppendContinuationItemsAction extends YTNode {
    static type: string;
    items: import("../../helpers").SuperParsedResult<YTNode>;
    target: string;
    constructor(data: any);
}
export default AppendContinuationItemsAction;
