import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
import Text from './misc/Text';
declare class ItemSectionTab extends YTNode {
    static type: string;
    title: Text;
    selected: boolean;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ItemSectionTab;
