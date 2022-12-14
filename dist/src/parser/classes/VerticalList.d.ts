import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class VerticalList extends YTNode {
    static type: string;
    items: import("../helpers").SuperParsedResult<YTNode>;
    collapsed_item_count: string;
    collapsed_state_button_text: Text;
    constructor(data: any);
    get contents(): import("../helpers").SuperParsedResult<YTNode>;
}
export default VerticalList;
