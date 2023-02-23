import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import Endscreen from '../classes/Endscreen.js';
import Message from '../classes/Message.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicDescriptionShelf from '../classes/MusicDescriptionShelf.js';
import MusicQueue from '../classes/MusicQueue.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import PlaylistPanel from '../classes/PlaylistPanel.js';
import RichGrid from '../classes/RichGrid.js';
import SectionList from '../classes/SectionList.js';
import Tab from '../classes/Tab.js';
import type Format from '../classes/misc/Format.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import type PlayerLiveStoryboardSpec from '../classes/PlayerLiveStoryboardSpec.js';
import type PlayerStoryboardSpec from '../classes/PlayerStoryboardSpec.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import type { INextResponse, IPlayerResponse } from '../types/ParsedResponse.js';
import { DownloadOptions, FormatFilter, FormatOptions, URLTransformer } from '../../utils/FormatUtils.js';
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
        hls_manifest_url: string | null;
    } | undefined;
    playability_status: {
        status: string;
        error_screen: YTNode | null;
        audio_only_playablility: import("../classes/AudioOnlyPlayability.js").default | null;
        embeddable: boolean;
        reason: string;
    };
    storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
    endscreen?: Endscreen;
    tabs?: ObservedArray<Tab>;
    current_video_endpoint?: NavigationEndpoint;
    player_overlays?: PlayerOverlay;
    constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string);
    /**
   * Generates a DASH manifest from the streaming data.
   * @param url_transformer - Function to transform the URLs.
   * @param format_filter - Function to filter the formats.
   * @returns DASH manifest
   */
    toDash(url_transformer?: URLTransformer, format_filter?: FormatFilter): string;
    /**
     * Selects the format that best matches the given options.
     * @param options - Options
     */
    chooseFormat(options: FormatOptions): Format;
    /**
     * Downloads the video.
     * @param options - Download options.
     */
    download(options?: DownloadOptions): Promise<ReadableStream<Uint8Array>>;
    /**
     * Retrieves contents of the given tab.
     */
    getTab(title_or_page_type: string): Promise<ObservedArray<YTNode> | SectionList | MusicQueue | RichGrid | Message>;
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
    addToWatchHistory(): Promise<Response>;
    get available_tabs(): string[];
    get page(): [IPlayerResponse, INextResponse?];
}
export default TrackInfo;
