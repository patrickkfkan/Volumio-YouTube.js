import Parser from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class SearchBox extends YTNode {
    constructor(data) {
        super();
        this.endpoint = new NavigationEndpoint(data.endpoint);
        this.search_button = Parser.parse(data.searchButton);
        this.clear_button = Parser.parse(data.clearButton);
        this.placeholder_text = new Text(data.placeholderText);
    }
}
SearchBox.type = 'SearchBox';
export default SearchBox;
//# sourceMappingURL=SearchBox.js.map