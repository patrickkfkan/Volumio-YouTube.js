import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class SearchBox extends YTNode {
    static type: string;
    endpoint: NavigationEndpoint;
    search_button: import("../helpers").SuperParsedResult<YTNode>;
    clear_button: import("../helpers").SuperParsedResult<YTNode>;
    placeholder_text: Text;
    constructor(data: any);
}
export default SearchBox;
