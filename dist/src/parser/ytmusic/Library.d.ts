import { GridContinuation, MusicShelfContinuation, ParsedResponse, PlaylistPanelContinuation, SectionListContinuation } from '..';
import Actions from '../../core/Actions';
import NavigationEndpoint from '../classes/NavigationEndpoint';
declare type Continuation = {
    type: 'browse' | 'next';
    token: string;
    payload?: {};
};
declare type ItemFilter = ((item: any) => boolean) | null;
declare type SortBy = 'recently_added' | 'a_z' | 'z_a';
declare class Library {
    #private;
    constructor(actions: Actions);
    /**
     * Retrieves the library's playlists
     */
    getPlaylists(args?: {
        sort_by?: SortBy;
    }): Promise<LibraryItemList>;
    /**
     * Retrieves the library's albums
     */
    getAlbums(args?: {
        sort_by?: SortBy;
    }): Promise<LibraryItemList>;
    /**
     * Retrieves the library's artists
     */
    getArtists(args?: {
        sort_by?: SortBy;
    }): Promise<LibraryItemList>;
    /**
     * Retrieves the library's songs
     */
    getSongs(args?: {
        sort_by?: SortBy | 'random';
    }): Promise<LibraryItemList>;
    /**
     * Retrieves the library's subscriptions
     */
    getSubscriptions(args?: {
        sort_by?: SortBy;
    }): Promise<LibraryItemList>;
    /**
     * Retrieves recent activity
     */
    getRecentActivity(args: {
        all: boolean;
    }): Promise<LibraryItemList | LibrarySectionList>;
}
declare abstract class LibraryResultsBase {
    #private;
    has_continuation: boolean;
    constructor(continuation: Continuation | null, page: ParsedResponse, actions: Actions);
    getContinuation(): Promise<LibraryResultsBase>;
    get page(): {
        actions: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        actions_memo: import("../helpers").Memo;
        contents: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        contents_memo: import("../helpers").Memo;
        on_response_received_actions: import("../helpers").ObservedArray<import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: import("../helpers").Memo;
        on_response_received_endpoints: import("../helpers").ObservedArray<import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: import("../helpers").Memo;
        on_response_received_commands: import("../helpers").ObservedArray<import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: import("../helpers").Memo;
        continuation: import("..").TimedContinuation | null | undefined;
        continuation_contents: SectionListContinuation | import("..").LiveChatContinuation | import("..").MusicPlaylistShelfContinuation | MusicShelfContinuation | GridContinuation | PlaylistPanelContinuation | null | undefined;
        metadata: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        header: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        microformat: import("../helpers").YTNode | null;
        sidebar: import("../helpers").YTNode | null;
        overlay: import("../helpers").YTNode | null;
        refinements: any;
        estimated_results: number | null;
        player_overlays: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        playability_status: {
            status: string;
            error_screen: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
            embeddable: boolean;
            reason: any;
        } | undefined;
        streaming_data: {
            expires: Date;
            formats: import("../classes/misc/Format").default[];
            adaptive_formats: import("../classes/misc/Format").default[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        } | undefined;
        current_video_endpoint: NavigationEndpoint | null;
        captions: import("../classes/PlayerCaptionsTracklist").default | null;
        video_details: import("../classes/misc/VideoDetails").default | undefined;
        annotations: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        storyboards: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        endscreen: import("../classes/Endscreen").default | null;
        cards: import("../classes/CardCollection").default | null;
    };
    abstract parseContinuationContents(page: ParsedResponse, from_continuation: Continuation): Promise<LibraryResultsBase>;
}
declare class LibraryItemList extends LibraryResultsBase {
    #private;
    items: any[];
    sort_by: SortBy | 'random' | null;
    constructor(items: Array<any>, filter: ItemFilter, continuation: Continuation | null, page: ParsedResponse, actions: Actions, overrides?: {
        sort_by: SortBy | 'random' | null;
    });
    parseContinuationContents(page: ParsedResponse, from_continuation: Continuation): Promise<LibraryItemList>;
    get all_items(): any[];
    get filter(): ItemFilter;
}
declare class LibrarySectionList extends LibraryResultsBase {
    #private;
    sections: any[];
    constructor(sections: Array<any>, continuation: Continuation | null, page: ParsedResponse, actions: Actions);
    parseContinuationContents(page: ParsedResponse, from_continuation: Continuation): Promise<LibrarySectionList>;
}
export default Library;
