import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import Parser from '../parser.js';
class GuideCollapsibleEntry extends YTNode {
    constructor(data) {
        super();
        this.expander_item = {
            title: new Text(data.expanderItem.guideEntryRenderer.formattedTitle).toString(),
            icon_type: data.expanderItem.guideEntryRenderer.icon.iconType
        };
        this.collapser_item = {
            title: new Text(data.collapserItem.guideEntryRenderer.formattedTitle).toString(),
            icon_type: data.collapserItem.guideEntryRenderer.icon.iconType
        };
        this.expandable_items = Parser.parseArray(data.expandableItems);
    }
}
GuideCollapsibleEntry.type = 'GuideCollapsibleEntry';
export default GuideCollapsibleEntry;
//# sourceMappingURL=GuideCollapsibleEntry.js.map