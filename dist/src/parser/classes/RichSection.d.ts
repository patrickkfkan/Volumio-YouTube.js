import { YTNode } from '../helpers';
declare class RichSection extends YTNode {
    static type: string;
    contents: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default RichSection;
