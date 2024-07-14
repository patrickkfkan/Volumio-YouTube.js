import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import AvatarView from './AvatarView.js';
class DecoratedAvatarView extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.avatar = Parser.parseItem(data.avatar, AvatarView);
        this.a11y_label = data.a11yLabel;
        if ((_b = (_a = data.rendererContext) === null || _a === void 0 ? void 0 : _a.commandContext) === null || _b === void 0 ? void 0 : _b.onTap) {
            this.on_tap_endpoint = new NavigationEndpoint(data.rendererContext.commandContext.onTap);
        }
    }
}
DecoratedAvatarView.type = 'DecoratedAvatarView';
export default DecoratedAvatarView;
//# sourceMappingURL=DecoratedAvatarView.js.map