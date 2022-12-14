import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class Tooltip extends YTNode {
    static type: string;
    promo_config: {
        promo_id: string;
        impression_endpoints: NavigationEndpoint[];
        accept: NavigationEndpoint;
        dismiss: NavigationEndpoint;
    };
    target_id: string;
    details: Text;
    suggested_position: string;
    dismiss_stratedy: string;
    dwell_time_ms: number;
    constructor(data: any);
}
export default Tooltip;
