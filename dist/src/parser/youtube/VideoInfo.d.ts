import ChipCloud from '../classes/ChipCloud.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import CommentsEntryPointHeader from '../classes/comments/CommentsEntryPointHeader.js';
import LiveChat from '../classes/LiveChat.js';
import MerchandiseShelf from '../classes/MerchandiseShelf.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import VideoPrimaryInfo from '../classes/VideoPrimaryInfo.js';
import VideoSecondaryInfo from '../classes/VideoSecondaryInfo.js';
import LiveChatWrap from './LiveChat.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import type CardCollection from '../classes/CardCollection.js';
import type Endscreen from '../classes/Endscreen.js';
import type PlayerAnnotationsExpanded from '../classes/PlayerAnnotationsExpanded.js';
import type PlayerCaptionsTracklist from '../classes/PlayerCaptionsTracklist.js';
import type PlayerLiveStoryboardSpec from '../classes/PlayerLiveStoryboardSpec.js';
import type PlayerStoryboardSpec from '../classes/PlayerStoryboardSpec.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import { MediaInfo } from '../../core/mixins/index.js';
declare class VideoInfo extends MediaInfo {
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
        } | null | undefined;
        channel: {
            id: string;
            name: string;
            url: string;
        } | null;
        is_unlisted: boolean | undefined;
        is_family_safe: boolean | undefined;
        category: string | null;
        has_ypc_metadata: boolean | null;
        start_timestamp: Date | null;
        view_count: number | undefined;
        id?: string | undefined;
        channel_id?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        keywords?: string[] | undefined;
        is_owner_viewing?: boolean | undefined;
        short_description?: string | undefined;
        thumbnail?: import("../misc.js").Thumbnail[] | undefined;
        allow_ratings?: boolean | undefined;
        author?: string | undefined;
        is_private?: boolean | undefined;
        is_live?: boolean | undefined;
        is_live_content?: boolean | undefined;
        is_upcoming?: boolean | undefined;
        is_crawlable?: boolean | undefined;
        is_post_live_dvr?: boolean | undefined;
    };
    annotations?: ObservedArray<PlayerAnnotationsExpanded>;
    storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
    endscreen?: Endscreen;
    captions?: PlayerCaptionsTracklist;
    cards?: CardCollection;
    primary_info?: VideoPrimaryInfo | null;
    secondary_info?: VideoSecondaryInfo | null;
    playlist?: {
        id: string;
        title: string;
        author: import("../misc.js").Text | import("../misc.js").Author;
        contents: YTNode[];
        current_index: number;
        is_infinite: boolean;
        menu: import("../nodes.js").Menu | null;
    } | undefined;
    game_info?: {
        title: import("../misc.js").Text | undefined;
        release_year: import("../misc.js").Text | undefined;
    } | undefined;
    merchandise?: MerchandiseShelf | null;
    related_chip_cloud?: ChipCloud | null;
    watch_next_feed?: ObservedArray<YTNode> | null;
    player_overlays?: PlayerOverlay | null;
    comments_entry_point_header?: CommentsEntryPointHeader | null;
    livechat?: LiveChat | null;
    autoplay?: {
        sets: {
            autoplay_video: NavigationEndpoint;
            next_button_video?: NavigationEndpoint | undefined;
        }[];
        modified_sets?: {
            autoplay_video: NavigationEndpoint;
            next_button_video?: NavigationEndpoint | undefined;
        }[] | undefined;
        count_down_secs?: number | undefined;
    } | undefined;
    /**
     * @param data - API response.
     * @param actions - Actions instance.
     * @param player - Player instance.
     * @param cpn - Client Playback Nonce.
     */
    constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string);
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
     * Retrieves trailer info if available (typically for non-purchased movies or films).
     * @returns `VideoInfo` for the trailer, or `null` if none.
     */
    getTrailerInfo(): VideoInfo | null;
    /**
     * Watch next feed filters.
     */
    get filters(): string[];
    /**
     * Checks if continuation is available for the watch next feed.
     */
    get wn_has_continuation(): boolean;
    /**
     * Gets the endpoint of the autoplay video
     */
    get autoplay_video_endpoint(): NavigationEndpoint | null;
    /**
     * Checks if trailer is available.
     */
    get has_trailer(): boolean;
    /**
     * Get songs used in the video.
     */
    get music_tracks(): never[];
}
export default VideoInfo;
