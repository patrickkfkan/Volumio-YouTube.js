import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class ChipCloudChip extends YTNode {
    static type: string;
    is_selected: boolean;
    endpoint: NavigationEndpoint | undefined;
    text: string;
    constructor(data: any);
}
export default ChipCloudChip;
