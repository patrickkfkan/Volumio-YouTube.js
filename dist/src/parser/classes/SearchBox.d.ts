import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class SearchBox extends YTNode {
    static type: string;
    endpoint: NavigationEndpoint;
    search_button: import("../helpers.js").SuperParsedResult<YTNode>;
    clear_button: import("../helpers.js").SuperParsedResult<YTNode>;
    placeholder_text: Text;
    constructor(data: any);
}
export default SearchBox;
