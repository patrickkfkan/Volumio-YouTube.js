import { YTNode } from '../helpers';
declare class SectionList extends YTNode {
    static type: string;
    target_id: any;
    contents: import("../helpers").SuperParsedResult<YTNode>;
    continuation: any;
    header: import("../helpers").SuperParsedResult<YTNode> | undefined;
    constructor(data: any);
}
export default SectionList;
