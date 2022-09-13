import Actions from '../../core/Actions';
import { ObservedArray, YTNode } from '../helpers';
import Feed from '../../core/Feed';
import RichListHeader from '../classes/RichListHeader';
import SearchRefinementCard from '../classes/SearchRefinementCard';
import WatchCardHeroVideo from '../classes/WatchCardHeroVideo';
import WatchCardSectionSequence from '../classes/WatchCardSectionSequence';
declare class Search extends Feed {
    results: ObservedArray<YTNode> | null | undefined;
    refinements: any;
    estimated_results: number | null;
    watch_card: {
        header: YTNode | null;
        call_to_action: WatchCardHeroVideo | null;
        sections: never[] | ObservedArray<WatchCardSectionSequence>;
    };
    refinement_cards: {
        header: RichListHeader | null;
        cards: ObservedArray<SearchRefinementCard>;
    };
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Applies given refinement card and returns a new {@link Search} object.
     */
    selectRefinementCard(card: SearchRefinementCard | string): Promise<Search>;
    get refinement_card_queries(): string[];
    /**
     * Retrieves next batch of results.
     */
    getContinuation(): Promise<Search>;
}
export default Search;
