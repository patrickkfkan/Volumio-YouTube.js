import { YTNode } from '../helpers';
declare class BrowseFeedActions extends YTNode {
    static type: string;
    contents: import("../helpers").ObservedArray<YTNode>;
    constructor(data: any);
}
export default BrowseFeedActions;
