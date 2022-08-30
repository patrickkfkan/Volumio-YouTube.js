import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class RichShelf extends YTNode {
    static type: string;
    title: Text;
    contents: import("../helpers").SuperParsedResult<YTNode>;
    endpoint: NavigationEndpoint | null;
    constructor(data: any);
}
export default RichShelf;
