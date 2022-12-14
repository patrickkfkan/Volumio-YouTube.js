"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Format {
    constructor(data) {
        this.itag = data.itag;
        this.mime_type = data.mimeType;
        this.bitrate = data.bitrate;
        this.average_bitrate = data.averageBitrate;
        this.width = data.width || undefined;
        this.height = data.height || undefined;
        this.init_range = data.initRange ? {
            start: parseInt(data.initRange.start),
            end: parseInt(data.initRange.end)
        } : undefined;
        this.index_range = data.indexRange ? {
            start: parseInt(data.indexRange.start),
            end: parseInt(data.indexRange.end)
        } : undefined;
        this.last_modified = new Date(Math.floor(parseInt(data.lastModified) / 1000));
        this.content_length = parseInt(data.contentLength);
        this.quality = data.quality;
        this.quality_label = data.qualityLabel || undefined;
        this.fps = data.fps || undefined;
        this.url = data.url || undefined;
        this.cipher = data.cipher || undefined;
        this.signature_cipher = data.signatureCipher || undefined;
        this.audio_quality = data.audioQuality || undefined;
        this.approx_duration_ms = parseInt(data.approxDurationMs);
        this.audio_sample_rate = parseInt(data.audioSampleRate);
        this.audio_channels = data.audioChannels;
        this.loudness_db = data.loudnessDb;
        this.has_audio = !!data.audioBitrate || !!data.audioQuality;
        this.has_video = !!data.qualityLabel;
    }
    /**
     * Decipher the streaming url of the format.
     * @returns Deciphered URL.
     */
    decipher(player) {
        return player.decipher(this.url, this.signature_cipher, this.cipher);
    }
}
exports.default = Format;
//# sourceMappingURL=Format.js.map