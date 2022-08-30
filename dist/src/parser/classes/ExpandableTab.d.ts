import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class ExpandableTab extends YTNode {
    static type: string;
    title: string;
    endpoint: NavigationEndpoint;
    selected: boolean;
    content: import("../helpers").SuperParsedResult<YTNode> | null;
    constructor(data: any);
}
export default ExpandableTab;
