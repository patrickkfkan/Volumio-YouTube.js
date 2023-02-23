import { YTNode } from '../../helpers.js';
import Text from '../misc/Text.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
class MusicMultiSelectMenuItem extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text(data.title).text;
        this.form_item_entity_key = data.formItemEntityKey;
        this.selected_icon_type = ((_a = data.selectedIcon) === null || _a === void 0 ? void 0 : _a.iconType) || null;
        this.endpoint = data.selectedCommand ? new NavigationEndpoint(data.selectedCommand) : null;
        this.selected = !!this.endpoint;
    }
}
MusicMultiSelectMenuItem.type = 'MusicMultiSelectMenuItem';
export default MusicMultiSelectMenuItem;
//# sourceMappingURL=MusicMultiSelectMenuItem.js.map