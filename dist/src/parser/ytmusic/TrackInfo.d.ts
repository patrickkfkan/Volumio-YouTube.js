import Actions, { AxioslikeResponse } from '../../core/Actions';
import Tab from '../classes/Tab';
import PlayerOverlay from '../classes/PlayerOverlay';
import PlaylistPanel from '../classes/PlaylistPanel';
import SectionList from '../classes/SectionList';
import MusicQueue from '../classes/MusicQueue';
import MusicCarouselShelf from '../classes/MusicCarouselShelf';
import MusicDescriptionShelf from '../classes/MusicDescriptionShelf';
import Message from '../classes/Message';
import { ObservedArray } from '../helpers';
declare class TrackInfo {
    #private;
    basic_info: {
        description: string;
        is_unlisted: boolean;
        is_family_safe: boolean;
        url_canonical: string;
        tags: any;
        id?: string | undefined;
        channel_id?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        keywords?: string[] | undefined;
        is_owner_viewing?: boolean | undefined;
        short_description?: string | undefined;
        thumbnail?: import("../classes/misc/Thumbnail").default[] | undefined;
        allow_ratings?: boolean | undefined;
        view_count?: number | undefined;
        author?: string | undefined;
        is_private?: boolean | undefined;
        is_live_content?: boolean | undefined;
        is_crawlable?: boolean | undefined;
    };
    streaming_data: {
        expires: Date;
        formats: import("../classes/misc/Format").default[];
        adaptive_formats: import("../classes/misc/Format").default[];
        dash_manifest_url: any;
        dls_manifest_url: any;
    } | undefined;
    playability_status: {
        status: string;
        error_screen: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        audio_only_playablility: import("../classes/AudioOnlyPlayability").default | null;
        embeddable: boolean;
        reason: any;
    } | undefined;
    storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
    endscreen: import("../classes/Endscreen").default | null;
    tabs: ObservedArray<Tab> | undefined;
    current_video_endpoint: import("../classes/NavigationEndpoint").default | null | undefined;
    player_overlays: PlayerOverlay | undefined;
    constructor(data: [AxioslikeResponse, AxioslikeResponse?], actions: Actions, cpn: string);
    /**
     * Retrieves contents of the given tab.
     */
    getTab(title: string): Promise<ObservedArray<import("../helpers").YTNode> | Message | MusicQueue | import("../classes/RichGrid").default | SectionList>;
    /**
     * Retrieves up next.
     */
    getUpNext(automix?: boolean): Promise<PlaylistPanel>;
    /**
     * Retrieves related content.
     */
    getRelated(): Promise<ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>>;
    /**
     * Retrieves lyrics.
     */
    getLyrics(): Promise<MusicDescriptionShelf | undefined>;
    /**
     * Adds the song to the watch history.
     */
    addToWatchHistory(): Promise<any>;
    get available_tabs(): string[];
    get page(): [{
        actions: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        actions_memo: import("../helpers").Memo;
        contents: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        contents_memo: import("../helpers").Memo;
        on_response_received_actions: ObservedArray<import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: import("../helpers").Memo;
        on_response_received_endpoints: ObservedArray<import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: import("../helpers").Memo;
        on_response_received_commands: ObservedArray<import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: import("../helpers").Memo;
        continuation: import("..").TimedContinuation | null | undefined;
        continuation_contents: import("..").SectionListContinuation | import("..").LiveChatContinuation | import("..").MusicPlaylistShelfContinuation | import("..").MusicShelfContinuation | import("..").GridContinuation | import("..").PlaylistPanelContinuation | null | undefined;
        metadata: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        header: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        microformat: import("../helpers").YTNode | null;
        sidebar: import("../helpers").YTNode | null;
        overlay: import("../helpers").YTNode | null;
        refinements: any;
        estimated_results: number | null;
        player_overlays: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        playback_tracking: {
            videostats_watchtime_url: any;
            videostats_playback_url: any;
        } | null;
        playability_status: {
            status: string;
            error_screen: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
            audio_only_playablility: import("../classes/AudioOnlyPlayability").default | null;
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
        current_video_endpoint: import("../classes/NavigationEndpoint").default | null;
        captions: import("../classes/PlayerCaptionsTracklist").default | null;
        video_details: import("../classes/misc/VideoDetails").default | undefined;
        annotations: ObservedArray<import("../classes/PlayerAnnotationsExpanded").default>;
        storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
        endscreen: import("../classes/Endscreen").default | null;
        cards: import("../classes/CardCollection").default | null;
    }, ({
        actions: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        actions_memo: import("../helpers").Memo;
        contents: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        contents_memo: import("../helpers").Memo;
        on_response_received_actions: ObservedArray<import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: import("../helpers").Memo;
        on_response_received_endpoints: ObservedArray<import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: import("../helpers").Memo;
        on_response_received_commands: ObservedArray<import("..").ReloadContinuationItemsCommand | import("..").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: import("../helpers").Memo;
        continuation: import("..").TimedContinuation | null | undefined;
        continuation_contents: import("..").SectionListContinuation | import("..").LiveChatContinuation | import("..").MusicPlaylistShelfContinuation | import("..").MusicShelfContinuation | import("..").GridContinuation | import("..").PlaylistPanelContinuation | null | undefined;
        metadata: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        header: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        microformat: import("../helpers").YTNode | null;
        sidebar: import("../helpers").YTNode | null;
        overlay: import("../helpers").YTNode | null;
        refinements: any;
        estimated_results: number | null;
        player_overlays: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        playback_tracking: {
            videostats_watchtime_url: any;
            videostats_playback_url: any;
        } | null;
        playability_status: {
            status: string;
            error_screen: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
            audio_only_playablility: import("../classes/AudioOnlyPlayability").default | null;
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
        current_video_endpoint: import("../classes/NavigationEndpoint").default | null;
        captions: import("../classes/PlayerCaptionsTracklist").default | null;
        video_details: import("../classes/misc/VideoDetails").default | undefined;
        annotations: ObservedArray<import("../classes/PlayerAnnotationsExpanded").default>;
        storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
        endscreen: import("../classes/Endscreen").default | null;
        cards: import("../classes/CardCollection").default | null;
    } | undefined)?];
}
export default TrackInfo;
