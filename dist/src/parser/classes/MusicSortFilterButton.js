import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import MusicMultiSelectMenu from './menus/MusicMultiSelectMenu.js';
import Text from './misc/Text.js';
class MusicSortFilterButton extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text(data.title).text;
        this.icon_type = ((_a = data.icon) === null || _a === void 0 ? void 0 : _a.icon_type) || null;
        this.menu = Parser.parseItem(data.menu, MusicMultiSelectMenu);
    }
}
MusicSortFilterButton.type = 'MusicSortFilterButton';
export default MusicSortFilterButton;
//# sourceMappingURL=MusicSortFilterButton.js.map