import { YTNode } from '../helpers';
declare class RichItem extends YTNode {
    static type: string;
    content: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default RichItem;
