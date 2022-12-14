import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class DidYouMean extends YTNode {
    static type: string;
    text: string;
    corrected_query: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default DidYouMean;
