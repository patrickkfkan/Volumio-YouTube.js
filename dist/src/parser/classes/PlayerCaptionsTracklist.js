import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
class PlayerCaptionsTracklist extends YTNode {
    constructor(data) {
        super();
        this.caption_tracks = data.captionTracks.map((ct) => ({
            base_url: ct.baseUrl,
            name: new Text(ct.name),
            vss_id: ct.vssId,
            language_code: ct.languageCode,
            kind: ct.kind,
            is_translatable: ct.isTranslatable
        }));
        this.audio_tracks = data.audioTracks.map((at) => ({
            audio_track_id: at.audioTrackId,
            captions_initial_state: at.captionsInitialState,
            default_caption_track_index: at.defaultCaptionTrackIndex,
            has_default_track: at.hasDefaultTrack,
            visibility: at.visibility,
            caption_track_indices: at.captionTrackIndices
        }));
        this.default_audio_track_index = data.defaultAudioTrackIndex;
        this.translation_languages = data.translationLanguages.map((tl) => ({
            language_code: tl.languageCode,
            language_name: new Text(tl.languageName)
        }));
    }
}
PlayerCaptionsTracklist.type = 'PlayerCaptionsTracklist';
export default PlayerCaptionsTracklist;
//# sourceMappingURL=PlayerCaptionsTracklist.js.map