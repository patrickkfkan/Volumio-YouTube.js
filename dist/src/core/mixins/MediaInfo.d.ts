import type { ApiResponse } from '../Actions.js';
import type Actions from '../Actions.js';
import type { DownloadOptions, FormatFilter, FormatOptions, URLTransformer } from '../../utils/FormatUtils.js';
import type Format from '../../parser/classes/misc/Format.js';
import type { INextResponse, IPlayerResponse } from '../../parser/index.js';
export default class MediaInfo {
    #private;
    streaming_data: {
        expires: Date;
        formats: Format[];
        adaptive_formats: Format[];
        dash_manifest_url: string | null;
        hls_manifest_url: string | null;
    } | undefined;
    playability_status: {
        status: string;
        error_screen: import("../../parser/helpers.js").YTNode | null;
        audio_only_playablility: import("../../parser/nodes.js").AudioOnlyPlayability | null;
        embeddable: boolean;
        reason: string;
    };
    constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string);
    /**
     * Generates a DASH manifest from the streaming data.
     * @param url_transformer - Function to transform the URLs.
     * @param format_filter - Function to filter the formats.
     * @returns DASH manifest
     */
    toDash(url_transformer?: URLTransformer, format_filter?: FormatFilter): Promise<string>;
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
    addToWatchHistory(client_name?: string, client_version?: string, replacement?: string): Promise<Response>;
    /**
     * Actions instance.
     */
    get actions(): Actions;
    /**
     * Content Playback Nonce.
     */
    get cpn(): string;
    /**
     * Original parsed InnerTube response.
     */
    get page(): [IPlayerResponse, INextResponse?];
}
