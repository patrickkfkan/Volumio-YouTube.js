import { YTNode } from '../helpers';
declare class AudioOnlyPlayability extends YTNode {
    static type: string;
    audio_only_availability: string;
    constructor(data: any);
}
export default AudioOnlyPlayability;
