import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class ReelShelf extends YTNode {
    static type: string;
    title: Text;
    items: import("../helpers.js").SuperParsedResult<YTNode>;
    endpoint: NavigationEndpoint | null;
    constructor(data: any);
    get contents(): import("../helpers.js").SuperParsedResult<YTNode>;
}
export default ReelShelf;
