import { YTNode } from '../helpers';
import NavigationEndpoint from './NavigationEndpoint';
declare class IconLink extends YTNode {
    static type: string;
    icon_type: string;
    tooltip?: string;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default IconLink;
