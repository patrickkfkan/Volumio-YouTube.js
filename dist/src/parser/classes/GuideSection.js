import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import Parser from '../parser.js';
class GuideSection extends YTNode {
    constructor(data) {
        super();
        if (data.formattedTitle) {
            this.title = new Text(data.formattedTitle);
        }
        this.items = Parser.parseArray(data.items);
    }
}
GuideSection.type = 'GuideSection';
export default GuideSection;
//# sourceMappingURL=GuideSection.js.map