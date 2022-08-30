import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class Button extends YTNode {
    static type: string;
    text: string;
    label: any;
    tooltip: any;
    icon_type: any;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default Button;
