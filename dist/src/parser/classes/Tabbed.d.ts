import { YTNode } from '../helpers';
declare class Tabbed extends YTNode {
    static type: string;
    contents: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default Tabbed;
