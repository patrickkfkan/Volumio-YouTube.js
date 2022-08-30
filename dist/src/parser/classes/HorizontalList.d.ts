import { YTNode } from '../helpers';
declare class HorizontalList extends YTNode {
    static type: string;
    visible_item_count: string;
    items: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers").SuperParsedResult<YTNode>;
}
export default HorizontalList;
