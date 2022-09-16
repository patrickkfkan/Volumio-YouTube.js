import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class ShowingResultsFor extends YTNode {
    static type: string;
    corrected_query: Text;
    endpoint: NavigationEndpoint;
    original_query_endpoint: NavigationEndpoint;
    original_query: Text;
    showing_results_for: Text;
    search_instead_for: Text;
    constructor(data: any);
}
export default ShowingResultsFor;
