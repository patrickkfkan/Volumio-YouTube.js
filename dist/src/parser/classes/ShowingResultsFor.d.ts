import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class ShowingResultsFor extends YTNode {
    static type: string;
    corrected_query: Text;
    endpoint: NavigationEndpoint;
    original_query_endpoint: NavigationEndpoint;
    /*** Volumio-YouTube.js ***/
    original_query: Text;
    showing_results_for: Text;
    search_instead_for: Text;
    constructor(data: any);
}
export default ShowingResultsFor;
