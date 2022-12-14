import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class SubFeedOption extends YTNode {
    static type: string;
    name: Text;
    is_selected: boolean;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default SubFeedOption;
