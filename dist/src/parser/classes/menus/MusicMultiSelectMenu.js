import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem.js';
import MusicMenuItemDivider from './MusicMenuItemDivider.js';
import { YTNode } from '../../helpers.js';
import Text from '../misc/Text.js';
import Parser from '../../index.js';
class MusicMultiSelectMenu extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text((_a = data.title.musicMenuTitleRenderer) === null || _a === void 0 ? void 0 : _a.primaryText).text;
        this.options = Parser.parseArray(data.options, [MusicMultiSelectMenuItem, MusicMenuItemDivider]);
    }
}
MusicMultiSelectMenu.type = 'MusicMultiSelectMenu';
export default MusicMultiSelectMenu;
//# sourceMappingURL=MusicMultiSelectMenu.js.map