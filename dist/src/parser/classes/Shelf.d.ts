import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class Shelf extends YTNode {
    static type: string;
    title: Text;
    endpoint: NavigationEndpoint | undefined;
    content: import("../helpers").SuperParsedResult<YTNode>;
    icon_type: any;
    menu: import("../helpers").SuperParsedResult<YTNode> | undefined;
    constructor(data: any);
}
export default Shelf;
