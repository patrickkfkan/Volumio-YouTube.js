import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray } from '../helpers.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class HomeFeed {
    #private;
    sections?: ObservedArray<MusicCarouselShelf>;
    constructor(response: ApiResponse, actions: Actions);
    /**
     * Retrieves home feed continuation.
     */
    getContinuation(): Promise<HomeFeed>;
    get has_continuation(): boolean;
    get page(): IBrowseResponse;
}
export default HomeFeed;
