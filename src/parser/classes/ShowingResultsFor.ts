import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class ShowingResultsFor extends YTNode {
  static type = 'ShowingResultsFor';

  corrected_query: Text;
  endpoint: NavigationEndpoint;
  original_query_endpoint: NavigationEndpoint;

  // Required by ytmusic plugin
  original_query: Text;
  showing_results_for: Text;
  search_instead_for: Text;

  constructor(data: any) {
    super();
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
    this.original_query_endpoint = new NavigationEndpoint(data.originalQueryEndpoint);

    // Required by ytmusic plugin
    this.original_query = new Text(data.originalQuery);
    this.showing_results_for = new Text(data.showingResultsFor);
    this.search_instead_for = new Text(data.searchInsteadFor);
  }
}

export default ShowingResultsFor;