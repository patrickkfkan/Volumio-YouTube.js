import { YTNode } from '../../helpers.js';
declare class MultiPageMenuNotificationSection extends YTNode {
    static type: string;
    items: import("../../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
    get contents(): import("../../helpers.js").SuperParsedResult<YTNode>;
}
export default MultiPageMenuNotificationSection;
