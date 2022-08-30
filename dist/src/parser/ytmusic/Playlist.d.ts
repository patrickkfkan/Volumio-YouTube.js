import { ParsedResponse } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';
declare class Playlist {
    #private;
    header: import("../helpers").YTNode | undefined;
    items: import("../helpers").ObservedArray<import("../helpers").YTNode> | null;
    constructor(response: AxioslikeResponse, actions: Actions);
    get page(): ParsedResponse;
    get has_continuation(): boolean;
    /**
     * Retrieves playlist item continuation.
     */
    getContinuation(): Promise<Playlist>;
    /**
     * Retrieves related playlists
     */
    getRelated(): Promise<(import("../classes/MusicTwoRowItem").default | import("../classes/MusicResponsiveListItem").default | import("../classes/MusicNavigationButton").default)[]>;
    getSuggestions(refresh?: boolean): Promise<any>;
}
export default Playlist;
