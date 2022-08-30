declare class Format {
    itag: string;
    mime_type: string;
    bitrate: any;
    average_bitrate: any;
    width: any;
    height: any;
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
    fps: string | undefined;
    url: string;
    cipher: string | undefined;
    signature_cipher: string | undefined;
    audio_quality: string | undefined;
    approx_duration_ms: number;
    audio_sample_rate: number;
    audio_channels: string;
    loudness_db: string;
    has_audio: boolean;
    has_video: boolean;
    constructor(data: any);
    /**
     * Decipher the streaming url of the format.
     * @returns Deciphered URL.
     */
    decipher(): string;
}
export default Format;
