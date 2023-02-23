import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ContinuationItem extends YTNode {
    static type: string;
    trigger: string;
    button?: YTNode | null | undefined;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ContinuationItem;
