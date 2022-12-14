import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class ReelShelf extends YTNode {
    static type: string;
    title: Text;
    items: import("../helpers").SuperParsedResult<YTNode>;
    endpoint: NavigationEndpoint | null;
    constructor(data: any);
    get contents(): import("../helpers").SuperParsedResult<YTNode>;
}
export default ReelShelf;
