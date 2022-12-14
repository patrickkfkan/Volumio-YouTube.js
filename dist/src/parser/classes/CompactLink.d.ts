import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class CompactLink extends YTNode {
    static type: string;
    title: string;
    endpoint: NavigationEndpoint;
    style: string;
    constructor(data: any);
}
export default CompactLink;
