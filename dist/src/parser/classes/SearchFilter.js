import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class SearchFilter extends YTNode {
    constructor(data) {
        super();
        this.label = new Text(data.label);
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.tooltip = data.tooltip;
    }
}
SearchFilter.type = 'SearchFilter';
export default SearchFilter;
//# sourceMappingURL=SearchFilter.js.map