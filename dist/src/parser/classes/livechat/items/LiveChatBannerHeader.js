import { YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import Text from '../../misc/Text.js';
class LiveChatBannerHeader extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.text = new Text(data.text).toString();
        this.icon_type = (_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType;
        this.context_menu_button = Parser.parseItem(data.contextMenuButton);
    }
}
LiveChatBannerHeader.type = 'LiveChatBannerHeader';
export default LiveChatBannerHeader;
//# sourceMappingURL=LiveChatBannerHeader.js.map