import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class ExpandableMetadata extends YTNode {
    constructor(data) {
        super();
        this.header = {
            collapsed_title: new Text(data.header.collapsedTitle),
            collapsed_thumbnail: Thumbnail.fromResponse(data.header.collapsedThumbnail),
            collapsed_label: new Text(data.header.collapsedLabel),
            expanded_title: new Text(data.header.expandedTitle)
        };
        this.expanded_content = Parser.parseItem(data.expandedContent);
        this.expand_button = Parser.parseItem(data.expandButton);
        this.collapse_button = Parser.parseItem(data.collapseButton);
    }
}
ExpandableMetadata.type = 'ExpandableMetadata';
export default ExpandableMetadata;
//# sourceMappingURL=ExpandableMetadata.js.map