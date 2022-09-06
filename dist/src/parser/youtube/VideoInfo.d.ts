import Actions, { AxioslikeResponse } from '../../core/Actions';
import Player from '../../core/Player';
import VideoPrimaryInfo from '../classes/VideoPrimaryInfo';
import VideoSecondaryInfo from '../classes/VideoSecondaryInfo';
import Format from '../classes/misc/Format';
import MerchandiseShelf from '../classes/MerchandiseShelf';
import ChipCloud from '../classes/ChipCloud';
import PlayerOverlay from '../classes/PlayerOverlay';
import CommentsEntryPointHeader from '../classes/comments/CommentsEntryPointHeader';
import LiveChat from '../classes/LiveChat';
import LiveChatWrap from './LiveChat';
export declare type URLTransformer = (url: URL) => URL;
export interface FormatOptions {
    /**
     * Video quality; 360p, 720p, 1080p, etc... also accepts 'best' and 'bestefficiency'.
     */
    quality?: string;
    /**
     * Download type, can be: video, audio or video+audio
     */
    type?: 'video' | 'audio' | 'video+audio';
    /**
     * File format, use 'any' to download any format
     */
    format?: string;
    /**
     * InnerTube client, can be ANDROID, WEB or YTMUSIC
     */
    client?: 'ANDROID' | 'WEB' | 'YTMUSIC';
}
export interface DownloadOptions extends FormatOptions {
    /**
     * Download range, indicates which bytes should be downloaded.
     */
    range?: {
        start: number;
        end: number;
    };
}
declare class VideoInfo {
    #private;
    basic_info: {
        like_count: number | undefined;
        is_liked: boolean | undefined;
        is_disliked: boolean | undefined;
        /**
         * Microformat is a bit redundant, so only
         * a few things there are interesting to us.
         */
        embed: {
            iframe_url: string;
            flash_url: string;
            flash_secure_url: string;
            width: any;
            height: any;
        } | null;
        channel: {
            id: string;
            name: string;
            url: string;
        } | null;
        is_unlisted: boolean | undefined;
        is_family_safe: boolean | undefined;
        has_ypc_metadata: boolean | null;
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
        formats: Format[];
        adaptive_formats: Format[];
        dash_manifest_url: any;
        dls_manifest_url: any;
    } | undefined;
    playability_status: {
        status: string;
        error_screen: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        embeddable: boolean;
        reason: any;
    } | undefined;
    annotations: import("../helpers").ObservedArray<import("../classes/PlayerAnnotationsExpanded").default>;
    storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
    endscreen: import("../classes/Endscreen").default | null;
    captions: import("../classes/PlayerCaptionsTracklist").default | null;
    cards: import("../classes/CardCollection").default | null;
    primary_info: VideoPrimaryInfo | undefined;
    secondary_info: VideoSecondaryInfo | undefined;
    merchandise: MerchandiseShelf | undefined;
    related_chip_cloud: ChipCloud | undefined;
    watch_next_feed: import("../helpers").ObservedArray<import("../helpers").YTNode> | null | undefined;
    player_overlays: PlayerOverlay | undefined;
    comments_entry_point_header: CommentsEntryPointHeader | undefined;
    livechat: LiveChat | undefined;
    /**
     * @param data - API response.
     * @param cpn - Client Playback Nonce
     */
    constructor(data: [AxioslikeResponse, AxioslikeResponse?], actions: Actions, player: Player, cpn: string);
    /**
     * Applies given filter to the watch next feed.
     */
    selectFilter(name: string): Promise<this>;
    /**
     * Adds the video to the watch history.
     */
    addToWatchHistory(): Promise<any>;
    /**
     * Retrieves watch next feed continuation.
     */
    getWatchNextContinuation(): Promise<this>;
    /**
     * Likes the video.
     */
    like(): Promise<AxioslikeResponse | undefined>;
    /**
     * Dislikes the video.
     */
    dislike(): Promise<AxioslikeResponse | undefined>;
    /**
     * Removes like/dislike.
     */
    removeLike(): Promise<AxioslikeResponse | undefined>;
    /**
     * Retrieves Live Chat if available.
     */
    getLiveChat(): LiveChatWrap;
    get filters(): string[];
    get actions(): Actions;
    get cpn(): string;
    get page(): [{
        actions: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        actions_memo: import("../helpers").Memo;
        contents: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        contents_memo: import("../helpers").Memo;
        on_response_received_actions: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: import("../helpers").Memo;
        on_response_received_endpoints: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: import("../helpers").Memo;
        on_response_received_commands: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: import("../helpers").Memo;
        continuation: import("../index").TimedContinuation | null | undefined;
        continuation_contents: import("../index").SectionListContinuation | import("../index").LiveChatContinuation | import("../index").MusicPlaylistShelfContinuation | import("../index").MusicShelfContinuation | import("../index").GridContinuation | import("../index").PlaylistPanelContinuation | null | undefined;
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
            embeddable: boolean;
            reason: any;
        } | undefined;
        streaming_data: {
            expires: Date;
            formats: Format[];
            adaptive_formats: Format[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        } | undefined;
        current_video_endpoint: import("../classes/NavigationEndpoint").default | null;
        captions: import("../classes/PlayerCaptionsTracklist").default | null;
        video_details: import("../classes/misc/VideoDetails").default | undefined;
        annotations: import("../helpers").ObservedArray<import("../classes/PlayerAnnotationsExpanded").default>;
        storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
        endscreen: import("../classes/Endscreen").default | null;
        cards: import("../classes/CardCollection").default | null;
    }, ({
        actions: import("../helpers").SuperParsedResult<import("../helpers").YTNode> | null;
        actions_memo: import("../helpers").Memo;
        contents: import("../helpers").SuperParsedResult<import("../helpers").YTNode>;
        contents_memo: import("../helpers").Memo;
        on_response_received_actions: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_actions_memo: import("../helpers").Memo;
        on_response_received_endpoints: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_endpoints_memo: import("../helpers").Memo;
        on_response_received_commands: import("../helpers").ObservedArray<import("../index").ReloadContinuationItemsCommand | import("../index").AppendContinuationItemsAction> | null;
        on_response_received_commands_memo: import("../helpers").Memo;
        continuation: import("../index").TimedContinuation | null | undefined;
        continuation_contents: import("../index").SectionListContinuation | import("../index").LiveChatContinuation | import("../index").MusicPlaylistShelfContinuation | import("../index").MusicShelfContinuation | import("../index").GridContinuation | import("../index").PlaylistPanelContinuation | null | undefined;
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
            embeddable: boolean;
            reason: any;
        } | undefined;
        streaming_data: {
            expires: Date;
            formats: Format[];
            adaptive_formats: Format[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        } | undefined;
        current_video_endpoint: import("../classes/NavigationEndpoint").default | null;
        captions: import("../classes/PlayerCaptionsTracklist").default | null;
        video_details: import("../classes/misc/VideoDetails").default | undefined;
        annotations: import("../helpers").ObservedArray<import("../classes/PlayerAnnotationsExpanded").default>;
        storyboards: import("../classes/PlayerStoryboardSpec").default | import("../classes/PlayerLiveStoryboardSpec").default | null;
        endscreen: import("../classes/Endscreen").default | null;
        cards: import("../classes/CardCollection").default | null;
    } | undefined)?];
    /**
     * Get songs used in the video.
     */
    get music_tracks(): never[];
    chooseFormat(options: FormatOptions): Format;
    toDash(url_transformer?: URLTransformer): string;
    /**
     * @param options - download options.
     */
    download(options?: DownloadOptions): Promise<any>;
}
export default VideoInfo;
