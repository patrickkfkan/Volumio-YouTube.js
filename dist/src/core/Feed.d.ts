import { ParsedResponse, ReloadContinuationItemsCommand } from '../parser/index';
import { Memo, ObservedArray } from '../parser/helpers';
import Actions from './Actions';
import Post from '../parser/classes/Post';
import BackstagePost from '../parser/classes/BackstagePost';
import Channel from '../parser/classes/Channel';
import CompactVideo from '../parser/classes/CompactVideo';
import GridChannel from '../parser/classes/GridChannel';
import GridPlaylist from '../parser/classes/GridPlaylist';
import GridVideo from '../parser/classes/GridVideo';
import Playlist from '../parser/classes/Playlist';
import PlaylistPanelVideo from '../parser/classes/PlaylistPanelVideo';
import PlaylistVideo from '../parser/classes/PlaylistVideo';
import ReelShelf from '../parser/classes/ReelShelf';
import RichShelf from '../parser/classes/RichShelf';
import Shelf from '../parser/classes/Shelf';
import WatchCardCompactVideo from '../parser/classes/WatchCardCompactVideo';
import Video from '../parser/classes/Video';
declare class Feed {
    #private;
    constructor(actions: Actions, data: any, already_parsed?: boolean);
    /**
     * Get all videos on a given page via memo
     */
    static getVideosFromMemo(memo: Memo): ObservedArray<CompactVideo | GridVideo | PlaylistPanelVideo | PlaylistVideo | Video | WatchCardCompactVideo>;
    /**
     * Get all playlists on a given page via memo
     */
    static getPlaylistsFromMemo(memo: Memo): ObservedArray<Playlist | GridPlaylist>;
    /**
     * Get all the videos in the feed
     */
    get videos(): ObservedArray<CompactVideo | GridVideo | PlaylistPanelVideo | PlaylistVideo | Video | WatchCardCompactVideo>;
    /**
     * Get all the community posts in the feed
     */
    get posts(): ObservedArray<BackstagePost | Post>;
    /**
     * Get all the channels in the feed
     */
    get channels(): ObservedArray<Channel | GridChannel>;
    /**
     * Get all playlists in the feed
     */
    get playlists(): ObservedArray<Playlist | GridPlaylist>;
    get memo(): Memo;
    /**
     * Returns contents from the page.
     */
    get contents(): ReloadContinuationItemsCommand | import("../parser/classes/MusicQueue").default | import("../parser/classes/RichGrid").default | import("../parser/classes/SectionList").default;
    /**
     * Returns all segments/sections from the page.
     */
    get shelves(): ObservedArray<ReelShelf | RichShelf | Shelf>;
    /**
     * Finds shelf by title.
     */
    getShelf(title: string): ReelShelf | RichShelf | Shelf | undefined;
    /**
     * Returns secondary contents from the page.
     */
    get secondary_contents(): import("../parser/helpers").SuperParsedResult<import("../parser/helpers").YTNode> | undefined;
    get actions(): Actions;
    /**
     * Get the original page data
     */
    get page(): {
        actions: import("../parser/helpers").SuperParsedResult<import("../parser/helpers").YTNode> | null;
        actions_memo: Memo;
        contents: import("../parser/helpers").SuperParsedResult<import("../parser/helpers").YTNode>;
        contents_memo: Memo;
        on_response_received_actions: ObservedArray<ReloadContinuationItemsCommand | import("../parser/index").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: Memo;
        on_response_received_endpoints: ObservedArray<ReloadContinuationItemsCommand | import("../parser/index").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: Memo;
        on_response_received_commands: ObservedArray<ReloadContinuationItemsCommand | import("../parser/index").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: Memo;
        continuation: import("../parser/index").TimedContinuation | null | undefined;
        continuation_contents: import("../parser/index").SectionListContinuation | import("../parser/index").LiveChatContinuation | import("../parser/index").MusicPlaylistShelfContinuation | import("../parser/index").MusicShelfContinuation | import("../parser/index").GridContinuation | import("../parser/index").PlaylistPanelContinuation | null | undefined;
        metadata: import("../parser/helpers").SuperParsedResult<import("../parser/helpers").YTNode>;
        header: import("../parser/helpers").SuperParsedResult<import("../parser/helpers").YTNode>;
        microformat: import("../parser/helpers").YTNode | null;
        sidebar: import("../parser/helpers").YTNode | null;
        overlay: import("../parser/helpers").YTNode | null;
        refinements: any;
        estimated_results: number | null;
        player_overlays: import("../parser/helpers").SuperParsedResult<import("../parser/helpers").YTNode>;
        playback_tracking: {
            videostats_watchtime_url: any;
            videostats_playback_url: any;
        } | null;
        playability_status: {
            status: string;
            error_screen: import("../parser/helpers").SuperParsedResult<import("../parser/helpers").YTNode>;
            embeddable: boolean;
            reason: any;
        } | undefined;
        streaming_data: {
            expires: Date;
            formats: import("../parser/classes/misc/Format").default[];
            adaptive_formats: import("../parser/classes/misc/Format").default[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        } | undefined;
        current_video_endpoint: import("../parser/classes/NavigationEndpoint").default | null;
        captions: import("../parser/classes/PlayerCaptionsTracklist").default | null;
        video_details: import("../parser/classes/misc/VideoDetails").default | undefined;
        annotations: ObservedArray<import("../parser/classes/PlayerAnnotationsExpanded").default>;
        storyboards: import("../parser/classes/PlayerStoryboardSpec").default | import("../parser/classes/PlayerLiveStoryboardSpec").default | null;
        endscreen: import("../parser/classes/Endscreen").default | null;
        cards: import("../parser/classes/CardCollection").default | null;
    };
    /**
     * Checks if the feed has continuation.
     */
    get has_continuation(): boolean;
    /**
     * Retrieves continuation data as it is.
     */
    getContinuationData(): Promise<ParsedResponse | undefined>;
    /**
     * Retrieves next batch of contents and returns a new {@link Feed} object.
     */
    getContinuation(): Promise<Feed>;
}
export default Feed;
