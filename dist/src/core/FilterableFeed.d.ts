import ChipCloudChip from '../parser/classes/ChipCloudChip';
import { ObservedArray } from '../parser/helpers';
import Actions from './Actions';
import Feed from './Feed';
declare class FilterableFeed extends Feed {
    #private;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Get filters for the feed
     */
    get filter_chips(): ObservedArray<ChipCloudChip>;
    get filters(): string[];
    /**
     * Applies given filter and returns a new {@link Feed} object.
     */
    getFilteredFeed(filter: string | ChipCloudChip): Promise<Feed>;
}
export default FilterableFeed;
