import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class PlayerCaptionsTracklist extends YTNode {
    static type: string;
    caption_tracks: {
        base_url: string;
        name: Text;
        vss_id: string;
        language_code: string;
        kind: string;
        is_translatable: boolean;
    }[];
    audio_tracks: {
        caption_track_indices: number;
    }[];
    translation_languages: {
        language_code: string;
        language_name: Text;
    }[];
    constructor(data: any);
}
export default PlayerCaptionsTracklist;
