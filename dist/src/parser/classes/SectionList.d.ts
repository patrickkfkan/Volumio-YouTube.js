import { YTNode } from '../helpers.js';
declare class SectionList extends YTNode {
    static type: string;
    target_id?: string;
    contents: import("../helpers.js").ObservedArray<YTNode>;
    continuation?: string;
    header?: import("../helpers.js").SuperParsedResult<YTNode> | undefined;
    sub_menu?: YTNode | null | undefined;
    constructor(data: any);
}
export default SectionList;
