import Actions from '../../core/Actions';
import Feed from '../../core/Feed';
import ItemSection from '../classes/ItemSection';
import BrowseFeedActions from '../classes/BrowseFeedActions';
declare class History extends Feed {
    sections: ItemSection[];
    feed_actions: BrowseFeedActions | BrowseFeedActions[];
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Retrieves next batch of contents.
     */
    getContinuation(): Promise<History>;
}
export default History;
