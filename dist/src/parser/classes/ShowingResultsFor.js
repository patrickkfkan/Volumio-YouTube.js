import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class ShowingResultsFor extends YTNode {
    constructor(data) {
        super();
        this.corrected_query = new Text(data.correctedQuery);
        this.endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
        this.original_query_endpoint = new NavigationEndpoint(data.originalQueryEndpoint);
        /*** Volumio-YouTube.js ***/
        this.original_query = new Text(data.originalQuery);
        this.showing_results_for = new Text(data.showingResultsFor);
        this.search_instead_for = new Text(data.searchInsteadFor);
    }
}
ShowingResultsFor.type = 'ShowingResultsFor';
export default ShowingResultsFor;
//# sourceMappingURL=ShowingResultsFor.js.map