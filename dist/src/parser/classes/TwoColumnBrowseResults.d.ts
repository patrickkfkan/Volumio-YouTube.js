import { YTNode } from '../helpers';
declare class TwoColumnBrowseResults extends YTNode {
    static type: string;
    tabs: import("../helpers").SuperParsedResult<YTNode>;
    secondary_contents: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default TwoColumnBrowseResults;
