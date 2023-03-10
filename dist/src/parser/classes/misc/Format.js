import { InnertubeError } from '../../../utils/Utils.js';
class Format {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
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
        if (this.has_audio) {
            const args = new URLSearchParams(this.cipher || this.signature_cipher);
            const url_components = new URLSearchParams(args.get('url') || this.url);
            this.language = ((_b = (_a = url_components.get('xtags')) === null || _a === void 0 ? void 0 : _a.split(':').find((x) => x.startsWith('lang='))) === null || _b === void 0 ? void 0 : _b.split('=').at(1)) || null;
            this.is_dubbed = ((_d = (_c = url_components.get('xtags')) === null || _c === void 0 ? void 0 : _c.split(':').find((x) => x.startsWith('acont='))) === null || _d === void 0 ? void 0 : _d.split('=').at(1)) === 'dubbed';
            this.is_descriptive = ((_f = (_e = url_components.get('xtags')) === null || _e === void 0 ? void 0 : _e.split(':').find((x) => x.startsWith('acont='))) === null || _f === void 0 ? void 0 : _f.split('=').at(1)) === 'descriptive';
            this.is_original = ((_h = (_g = url_components.get('xtags')) === null || _g === void 0 ? void 0 : _g.split(':').find((x) => x.startsWith('acont='))) === null || _h === void 0 ? void 0 : _h.split('=').at(1)) === 'original' || !this.is_dubbed;
            if (data.audioTrack) {
                this.audio_track = {
                    audio_is_default: data.audioTrack.audioIsDefault,
                    display_name: data.audioTrack.displayName,
                    id: data.audioTrack.id
                };
            }
        }
    }
    /**
     * Decipher the streaming url of the format.
     * @returns Deciphered URL.
     */
    decipher(player) {
        if (!player)
            throw new InnertubeError('Cannot decipher format, this session appears to have no valid player.');
        return player.decipher(this.url, this.signature_cipher, this.cipher);
    }
}
export default Format;
//# sourceMappingURL=Format.js.map