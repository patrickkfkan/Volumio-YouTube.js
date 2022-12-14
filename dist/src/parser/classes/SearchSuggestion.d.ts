import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class SearchSuggestion extends YTNode {
    static type: string;
    suggestion: Text;
    endpoint: NavigationEndpoint;
    icon_type: string;
    service_endpoint: NavigationEndpoint | undefined;
    constructor(data: any);
}
export default SearchSuggestion;
