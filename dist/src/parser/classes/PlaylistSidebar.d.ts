import { YTNode } from '../helpers';
declare class PlaylistSidebar extends YTNode {
    static type: string;
    items: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
    get contents(): import("../helpers").SuperParsedResult<YTNode>;
}
export default PlaylistSidebar;
