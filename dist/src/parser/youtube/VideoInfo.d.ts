import ChipCloud from '../classes/ChipCloud.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import CommentsEntryPointHeader from '../classes/comments/CommentsEntryPointHeader.js';
import LiveChat from '../classes/LiveChat.js';
import MerchandiseShelf from '../classes/MerchandiseShelf.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import VideoPrimaryInfo from '../classes/VideoPrimaryInfo.js';
import VideoSecondaryInfo from '../classes/VideoSecondaryInfo.js';
import LiveChatWrap from './LiveChat.js';
import type CardCollection from '../classes/CardCollection.js';
import type Endscreen from '../classes/Endscreen.js';
import type Format from '../classes/misc/Format.js';
import type PlayerAnnotationsExpanded from '../classes/PlayerAnnotationsExpanded.js';
import type PlayerCaptionsTracklist from '../classes/PlayerCaptionsTracklist.js';
import type PlayerLiveStoryboardSpec from '../classes/PlayerLiveStoryboardSpec.js';
import type PlayerStoryboardSpec from '../classes/PlayerStoryboardSpec.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type Player from '../../core/Player.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import type { INextResponse, IPlayerResponse } from '../types/ParsedResponse.js';
import { DownloadOptions, FormatFilter, FormatOptions, URLTransformer } from '../../utils/FormatUtils.js';
declare class VideoInfo {
    #private;
    basic_info: {
        like_count: number | undefined;
        is_liked: boolean | undefined;
        is_disliked: boolean | undefined;
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
        start_timestamp: Date | null;
        id?: string | undefined;
        channel_id?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        keywords?: string[] | undefined;
        is_owner_viewing?: boolean | undefined;
        short_description?: string | undefined;
        thumbnail?: import("../classes/misc/Thumbnail.js").default[] | undefined;
        allow_ratings?: boolean | undefined;
        view_count?: number | undefined;
        author?: string | undefined;
        is_private?: boolean | undefined;
        is_live?: boolean | undefined;
        is_live_content?: boolean | undefined;
        is_upcoming?: boolean | undefined;
        is_crawlable?: boolean | undefined;
    };
    streaming_data: {
        expires: Date;
        formats: Format[];
        adaptive_formats: Format[];
        dash_manifest_url: string | null;
        hls_manifest_url: string | null; /**
         * Microformat is a bit redundant, so only
         * a few things there are interesting to us.
         */
    } | undefined;
    playability_status: {
        status: string;
        error_screen: YTNode | null;
        audio_only_playablility: import("../classes/AudioOnlyPlayability.js").default | null;
        embeddable: boolean;
        reason: string;
    };
    annotations?: ObservedArray<PlayerAnnotationsExpanded>;
    storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
    endscreen?: Endscreen;
    captions?: PlayerCaptionsTracklist;
    cards?: CardCollection;
    primary_info?: VideoPrimaryInfo | null;
    secondary_info?: VideoSecondaryInfo | null;
    merchandise?: MerchandiseShelf | null;
    related_chip_cloud?: ChipCloud | null;
    watch_next_feed?: ObservedArray<YTNode> | null;
    player_overlays?: PlayerOverlay | null;
    comments_entry_point_header?: CommentsEntryPointHeader | null;
    livechat?: LiveChat | null;
    /**
     * @param data - API response.
     * @param actions - Actions instance.
     * @param player - Player instance.
     * @param cpn - Client Playback Nonce.
     */
    constructor(data: [ApiResponse, ApiResponse?], actions: Actions, player?: Player, cpn?: string);
    /**
     * Applies given filter to the watch next feed. Use {@link filters} to get available filters.
     * @param target_filter - Filter to apply.
     */
    selectFilter(target_filter: string | ChipCloudChip | undefined): Promise<VideoInfo>;
    /**
     * Adds video to the watch history.
     */
    addToWatchHistory(): Promise<Response>;
    /**
     * Retrieves watch next feed continuation.
     */
    getWatchNextContinuation(): Promise<VideoInfo>;
    /**
     * Likes the video.
     */
    like(): Promise<ApiResponse>;
    /**
     * Dislikes the video.
     */
    dislike(): Promise<ApiResponse>;
    /**
     * Removes like/dislike.
     */
    removeRating(): Promise<ApiResponse>;
    /**
     * Retrieves Live Chat if available.
     */
    getLiveChat(): LiveChatWrap;
    /**
     * Selects the format that best matches the given options.
     * @param options - Options
     */
    chooseFormat(options: FormatOptions): Format;
    /**
     * Generates a DASH manifest from the streaming data.
     * @param url_transformer - Function to transform the URLs.
     * @param format_filter - Function to filter the formats.
     * @returns DASH manifest
     */
    toDash(url_transformer?: URLTransformer, format_filter?: FormatFilter): string;
    /**
     * Downloads the video.
     * @param options - Download options.
     */
    download(options?: DownloadOptions): Promise<ReadableStream<Uint8Array>>;
    /**
     * Watch next feed filters.
     */
    get filters(): string[];
    /**
     * Actions instance.
     */
    get actions(): Actions;
    /**
     * Content Playback Nonce.
     */
    get cpn(): string | undefined;
    /**
     * Checks if continuation is available for the watch next feed.
     */
    get wn_has_continuation(): boolean;
    /**
     * Get songs used in the video.
     */
    get music_tracks(): never[];
    /**
     * Original parsed InnerTube response.
     */
    get page(): [IPlayerResponse, INextResponse?];
}
export default VideoInfo;
