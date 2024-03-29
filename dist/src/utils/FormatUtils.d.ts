import type Player from '../core/Player.js';
import type Actions from '../core/Actions.js';
import type Format from '../parser/classes/misc/Format.js';
import type AudioOnlyPlayability from '../parser/classes/AudioOnlyPlayability.js';
import type { YTNode } from '../parser/helpers.js';
export type URLTransformer = (url: URL) => URL;
export type FormatFilter = (format: Format) => boolean;
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
     * Language code, defaults to 'original'.
     */
    language?: string;
    /**
     * File format, use 'any' to download any format
     */
    format?: string;
    /**
     * InnerTube client, can be ANDROID, WEB, YTMUSIC, YTMUSIC_ANDROID, YTSTUDIO_ANDROID or TV_EMBEDDED
     */
    client?: 'WEB' | 'ANDROID' | 'YTMUSIC_ANDROID' | 'YTMUSIC' | 'YTSTUDIO_ANDROID' | 'TV_EMBEDDED';
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
declare class FormatUtils {
    #private;
    static download(options: DownloadOptions, actions: Actions, playability_status?: {
        status: string;
        error_screen: YTNode | null;
        audio_only_playablility: AudioOnlyPlayability | null;
        embeddable: boolean;
        reason: any;
    }, streaming_data?: {
        expires: Date;
        formats: Format[];
        adaptive_formats: Format[];
        dash_manifest_url: string | null;
        hls_manifest_url: string | null;
    }, player?: Player, cpn?: string): Promise<ReadableStream<Uint8Array>>;
    /**
     * Selects the format that best matches the given options.
     * @param options - Options
     * @param streaming_data - Streaming data
     */
    static chooseFormat(options: FormatOptions, streaming_data?: {
        expires: Date;
        formats: Format[];
        adaptive_formats: Format[];
        dash_manifest_url: string | null;
        hls_manifest_url: string | null;
    }): Format;
    static toDash(streaming_data?: {
        expires: Date;
        formats: Format[];
        adaptive_formats: Format[];
        dash_manifest_url: string | null;
        hls_manifest_url: string | null;
    }, url_transformer?: URLTransformer, format_filter?: FormatFilter, cpn?: string, player?: Player, actions?: Actions): Promise<string>;
}
export default FormatUtils;
