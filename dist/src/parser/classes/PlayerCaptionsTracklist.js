"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class PlayerCaptionsTracklist extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.caption_tracks = data.captionTracks.map((ct) => ({
            base_url: ct.baseUrl,
            name: new Text_1.default(ct.name),
            vss_id: ct.vssId,
            language_code: ct.languageCode,
            kind: ct.kind,
            is_translatable: ct.isTranslatable
        }));
        this.audio_tracks = data.audioTracks.map((at) => ({
            caption_track_indices: at.captionTrackIndices
        }));
        this.translation_languages = data.translationLanguages.map((tl) => ({
            language_code: tl.languageCode,
            language_name: new Text_1.default(tl.languageName)
        }));
    }
}
PlayerCaptionsTracklist.type = 'PlayerCaptionsTracklist';
exports.default = PlayerCaptionsTracklist;
//# sourceMappingURL=PlayerCaptionsTracklist.js.map