import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class MusicNavigationButton extends YTNode {
    constructor(data) {
        super();
        this.button_text = new Text(data.buttonText).toString();
        this.endpoint = new NavigationEndpoint(data.clickCommand);
        /*** Volumio-YouTube.js ***/
        // TODO: Push to YouTube.js repo
        if (Reflect.has(data, 'iconStyle') && Reflect.has(data.iconStyle, 'icon') && Reflect.has(data.iconStyle.icon, 'iconType')) {
            this.icon_type = data.iconStyle.icon.iconType;
        }
    }
}
MusicNavigationButton.type = 'MusicNavigationButton';
export default MusicNavigationButton;
//# sourceMappingURL=MusicNavigationButton.js.map