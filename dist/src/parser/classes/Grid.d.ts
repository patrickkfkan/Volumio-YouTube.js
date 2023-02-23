import { YTNode } from '../helpers.js';
declare class Grid extends YTNode {
    static type: string;
    items: import("../helpers.js").ObservedArray<YTNode>;
    is_collapsible?: boolean;
    visible_row_count?: string;
    target_id?: string;
    continuation: string | null;
    header?: import("../helpers.js").SuperParsedResult<YTNode> | undefined;
    constructor(data: any);
    get contents(): import("../helpers.js").ObservedArray<YTNode>;
}
export default Grid;
