import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class ShowingResultsFor extends YTNode {
    static type: string;
    corrected_query: Text;
    endpoint: NavigationEndpoint;
    original_query_endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default ShowingResultsFor;
