import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class Button extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        if (data.text) {
            this.text = new Text(data.text).toString();
        }
        if ((_a = data.accessibility) === null || _a === void 0 ? void 0 : _a.label) {
            this.label = (_b = data.accessibility) === null || _b === void 0 ? void 0 : _b.label;
        }
        if (data.tooltip) {
            this.tooltip = data.tooltip;
        }
        if ((_c = data.icon) === null || _c === void 0 ? void 0 : _c.iconType) {
            this.icon_type = (_d = data.icon) === null || _d === void 0 ? void 0 : _d.iconType;
        }
        if (Reflect.has(data, 'isDisabled')) {
            this.is_disabled = data.isDisabled;
        }
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint || data.command);
    }
}
Button.type = 'Button';
export default Button;
//# sourceMappingURL=Button.js.map