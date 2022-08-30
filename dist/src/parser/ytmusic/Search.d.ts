import { ParsedResponse } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import DidYouMean from '../classes/DidYouMean';
import ShowingResultsFor from '../classes/ShowingResultsFor';
import MusicShelf from '../classes/MusicShelf';
import MusicResponsiveListItem from '../classes/MusicResponsiveListItem';
import ChipCloud from '../classes/ChipCloud';
import Message from '../classes/Message';
declare class Search {
    #private;
    header: ChipCloud | null | undefined;
    did_you_mean: DidYouMean | null;
    showing_results_for: ShowingResultsFor | null;
    message: Message | null;
    results: import("../helpers").ObservedArray<MusicResponsiveListItem> | undefined;
    sections: import("../helpers").ObservedArray<MusicShelf> | undefined;
    constructor(response: AxioslikeResponse | ParsedResponse, actions: Actions, args?: {
        is_continuation?: boolean;
        is_filtered?: boolean;
    });
    /**
     * Equivalent to clicking on the shelf to load more items.
     */
    getMore(shelf: MusicShelf | undefined): Promise<Search>;
    /**
     * Retrieves continuation, only works for individual sections or filtered results.
     */
    getContinuation(): Promise<this>;
    /**
     * Applies given filter to the search.
     */
    selectFilter(name: string): Promise<Search>;
    get has_continuation(): boolean;
    get filters(): string[] | null;
    get songs(): MusicShelf | undefined;
    get videos(): MusicShelf | undefined;
    get albums(): MusicShelf | undefined;
    get artists(): MusicShelf | undefined;
    get playlists(): MusicShelf | undefined;
    get page(): ParsedResponse;
}
export default Search;
