import { YTNode } from '../helpers';
declare class TwoColumnSearchResults extends YTNode {
    static type: string;
    primary_contents: import("../helpers").SuperParsedResult<YTNode>;
    secondary_contents: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default TwoColumnSearchResults;
