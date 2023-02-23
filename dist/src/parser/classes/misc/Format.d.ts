import Player from '../../../core/Player.js';
declare class Format {
    itag: number;
    mime_type: string;
    bitrate: number;
    average_bitrate: number;
    width: number;
    height: number;
    init_range: {
        start: number;
        end: number;
    } | undefined;
    index_range: {
        start: number;
        end: number;
    } | undefined;
    last_modified: Date;
    content_length: number;
    quality: string;
    quality_label: string | undefined;
    fps: number | undefined;
    url: string;
    cipher: string | undefined;
    signature_cipher: string | undefined;
    audio_quality: string | undefined;
    audio_track?: {
        audio_is_default: boolean;
        display_name: string;
        id: string;
    };
    approx_duration_ms: number;
    audio_sample_rate: number;
    audio_channels: number;
    loudness_db: number;
    has_audio: boolean;
    has_video: boolean;
    language?: string | null;
    is_dubbed?: boolean;
    is_original?: boolean;
    constructor(data: any);
    /**
     * Decipher the streaming url of the format.
     * @returns Deciphered URL.
     */
    decipher(player: Player | undefined): string;
}
export default Format;
