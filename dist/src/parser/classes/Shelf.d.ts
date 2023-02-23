import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class Shelf extends YTNode {
    static type: string;
    title: Text;
    endpoint?: NavigationEndpoint;
    content: YTNode | null;
    icon_type?: string;
    menu?: YTNode | null;
    constructor(data: any);
}
export default Shelf;
