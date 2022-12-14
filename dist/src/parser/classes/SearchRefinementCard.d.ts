import NavigationEndpoint from './NavigationEndpoint';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class SearchRefinementCard extends YTNode {
    static type: string;
    thumbnails: Thumbnail[];
    endpoint: NavigationEndpoint;
    query: string;
    constructor(data: any);
}
export default SearchRefinementCard;
