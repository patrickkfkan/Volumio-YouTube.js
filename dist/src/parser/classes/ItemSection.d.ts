import ItemSectionHeader from './ItemSectionHeader';
import { YTNode } from '../helpers';
import ItemSectionTabbedHeader from './ItemSectionTabbedHeader';
declare class ItemSection extends YTNode {
    static type: string;
    header: ItemSectionHeader | ItemSectionTabbedHeader | null;
    contents: import("../helpers").ObservedArray<YTNode> | null;
    target_id: any;
    constructor(data: any);
}
export default ItemSection;
