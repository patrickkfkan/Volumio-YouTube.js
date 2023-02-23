import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class KidsCategoriesHeader extends YTNode {
    constructor(data) {
        super();
        this.category_tabs = Parser.parseArray(data.categoryTabs);
        this.privacy_button = Parser.parseItem(data.privacyButtonRenderer);
    }
}
KidsCategoriesHeader.type = 'kidsCategoriesHeader';
export default KidsCategoriesHeader;
//# sourceMappingURL=KidsCategoriesHeader.js.map