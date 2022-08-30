import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class ContinuationItem extends YTNode {
    static type: string;
    trigger: string;
    button?: import("../helpers").SuperParsedResult<YTNode> | undefined;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ContinuationItem;
