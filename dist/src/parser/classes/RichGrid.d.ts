import { YTNode } from '../helpers';
declare class RichGrid extends YTNode {
    static type: string;
    header: import("../helpers").SuperParsedResult<YTNode>;
    contents: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default RichGrid;
