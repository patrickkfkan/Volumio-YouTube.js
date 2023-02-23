import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class SubFeedOption extends YTNode {
    constructor(data) {
        super();
        this.name = new Text(data.name);
        this.is_selected = data.isSelected;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
SubFeedOption.type = 'SubFeedOption';
export default SubFeedOption;
//# sourceMappingURL=SubFeedOption.js.map