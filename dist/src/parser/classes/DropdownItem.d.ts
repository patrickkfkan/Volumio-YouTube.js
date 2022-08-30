import { YTNode } from '../helpers';
import NavigationEndpoint from './NavigationEndpoint';
declare class DropdownItem extends YTNode {
    static type: string;
    label: string;
    selected: boolean;
    value?: number | string;
    iconType?: string;
    description?: string;
    endpoint?: NavigationEndpoint;
    constructor(data: any);
}
export default DropdownItem;
