import { YTNode } from '../helpers.js';
declare class TwoColumnWatchNextResults extends YTNode {
    static type: string;
    results: import("../helpers.js").ObservedArray<YTNode>;
    secondary_results: import("../helpers.js").ObservedArray<YTNode>;
    conversation_bar: YTNode | null;
    constructor(data: any);
}
export default TwoColumnWatchNextResults;
