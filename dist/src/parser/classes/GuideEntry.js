import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
class GuideEntry extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text(data.formattedTitle);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
        if ((_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType) {
            this.icon_type = data.icon.iconType;
        }
        if (data.thumbnail) {
            this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        }
        if (data.badges) {
            this.badges = data.badges;
        }
        this.is_primary = !!data.isPrimary;
    }
}
GuideEntry.type = 'GuideEntry';
export default GuideEntry;
//# sourceMappingURL=GuideEntry.js.map