import { YTNode } from '../helpers';
declare class MetadataRowContainer extends YTNode {
    static type: string;
    rows: import("../helpers").ObservedArray<YTNode>;
    collapsed_item_count: number;
    constructor(data: any);
}
export default MetadataRowContainer;
