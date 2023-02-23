import NavigationEndpoint from '../classes/NavigationEndpoint.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import SlimVideoMetadata from '../classes/SlimVideoMetadata.js';
import type Format from '../classes/misc/Format.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import type { INextResponse, IPlayerResponse } from '../types/ParsedResponse.js';
import { DownloadOptions, FormatFilter, FormatOptions, URLTransformer } from '../../utils/FormatUtils.js';
declare class VideoInfo {
    #private;
    basic_info: import("../classes/misc/VideoDetails.js").default | undefined;
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
    captions: import("../classes/PlayerCaptionsTracklist.js").default | undefined;
    slim_video_metadata?: SlimVideoMetadata;
    watch_next_feed?: ObservedArray<YTNode>;
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
   * Adds video to the watch history.
   */
    addToWatchHistory(): Promise<Response>;
    /**
   * Actions instance.
   */
    get actions(): Actions;
    /**
     * Content Playback Nonce.
     */
    get cpn(): string | undefined;
    get page(): [IPlayerResponse, INextResponse?];
}
export default VideoInfo;
