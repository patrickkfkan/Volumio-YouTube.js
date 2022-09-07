import { ParsedResponse } from '../index';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import MusicDetailHeader from '../classes/MusicDetailHeader';
declare class Playlist {
    #private;
    header: MusicDetailHeader | undefined;
    items: import("../helpers").ObservedArray<import("../helpers").YTNode> | null;
    constructor(response: AxioslikeResponse, actions: Actions);
    get page(): ParsedResponse;
    get has_continuation(): boolean;
    /**
     * Retrieves playlist items continuation.
     */
    getContinuation(): Promise<Playlist>;
    /**
     * Retrieves related playlists
     */
    getRelated(): Promise<(import("../classes/MusicTwoRowItem").default | import("../classes/MusicResponsiveListItem").default | import("../classes/MusicNavigationButton").default)[]>;
    getSuggestions(refresh?: boolean): Promise<any>;
}
export default Playlist;
