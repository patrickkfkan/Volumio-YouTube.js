import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class VerticalWatchCardList extends YTNode {
    static type: string;
    items: import("../helpers").SuperParsedResult<YTNode>;
    contents: import("../helpers").SuperParsedResult<YTNode>;
    view_all_text: Text;
    view_all_endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default VerticalWatchCardList;
