import { YTNode } from '../helpers';
declare class TwoColumnWatchNextResults extends YTNode {
    static type: string;
    results: import("../helpers").ObservedArray<YTNode> | null;
    secondary_results: import("../helpers").ObservedArray<YTNode> | null;
    conversation_bar: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default TwoColumnWatchNextResults;
