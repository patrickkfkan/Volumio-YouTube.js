import Text from './misc/Text';
import { ObservedArray, YTNode } from '../helpers';
import ItemSectionTab from './ItemSectionTab';
declare class ItemSectionTabbedHeader extends YTNode {
    static type: string;
    title: Text;
    tabs: Array<ItemSectionTab>;
    end_items?: ObservedArray<YTNode>;
    constructor(data: any);
}
export default ItemSectionTabbedHeader;
