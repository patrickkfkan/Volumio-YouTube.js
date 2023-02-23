import { YTNode } from '../helpers.js';
declare class RichGrid extends YTNode {
    static type: string;
    header: YTNode | null;
    contents: import("../helpers.js").ObservedArray<YTNode>;
    constructor(data: any);
}
export default RichGrid;
