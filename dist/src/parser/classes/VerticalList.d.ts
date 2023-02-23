import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class VerticalList extends YTNode {
    static type: string;
    items: import("../helpers.js").SuperParsedResult<YTNode>;
    collapsed_item_count: string;
    collapsed_state_button_text: Text;
    constructor(data: any);
    get contents(): import("../helpers.js").SuperParsedResult<YTNode>;
}
export default VerticalList;
