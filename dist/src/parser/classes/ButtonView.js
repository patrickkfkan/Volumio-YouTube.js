import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class ButtonView extends YTNode {
    constructor(data) {
        super();
        this.icon_name = data.iconName;
        this.title = data.title;
        this.accessibility_text = data.accessibilityText;
        this.style = data.style;
        this.is_full_width = data.isFullWidth;
        this.button_type = data.type;
        this.button_size = data.buttonSize;
        this.on_tap = new NavigationEndpoint(data.onTap);
    }
}
ButtonView.type = 'ButtonView';
export default ButtonView;
//# sourceMappingURL=ButtonView.js.map