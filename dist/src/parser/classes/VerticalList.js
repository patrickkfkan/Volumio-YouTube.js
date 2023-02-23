import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class VerticalList extends YTNode {
    constructor(data) {
        super();
        this.items = Parser.parse(data.items);
        this.collapsed_item_count = data.collapsedItemCount;
        this.collapsed_state_button_text = new Text(data.collapsedStateButtonText);
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
VerticalList.type = 'VerticalList';
export default VerticalList;
//# sourceMappingURL=VerticalList.js.map