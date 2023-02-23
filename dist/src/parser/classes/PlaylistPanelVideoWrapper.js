import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class PlaylistPanelVideoWrapper extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.primary = Parser.parseItem(data.primaryRenderer);
        this.counterpart = ((_a = data.counterpart) === null || _a === void 0 ? void 0 : _a.map((item) => Parser.parseItem(item.counterpartRenderer))) || [];
    }
}
PlaylistPanelVideoWrapper.type = 'PlaylistPanelVideoWrapper';
export default PlaylistPanelVideoWrapper;
//# sourceMappingURL=PlaylistPanelVideoWrapper.js.map