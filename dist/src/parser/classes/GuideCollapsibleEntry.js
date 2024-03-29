import Parser from '../parser.js';
import GuideEntry from './GuideEntry.js';
import { YTNode } from '../helpers.js';
class GuideCollapsibleEntry extends YTNode {
    constructor(data) {
        super();
        this.expander_item = Parser.parseItem(data.expanderItem, GuideEntry);
        this.collapser_item = Parser.parseItem(data.collapserItem, GuideEntry);
        this.expandable_items = Parser.parseArray(data.expandableItems);
    }
}
GuideCollapsibleEntry.type = 'GuideCollapsibleEntry';
export default GuideCollapsibleEntry;
//# sourceMappingURL=GuideCollapsibleEntry.js.map