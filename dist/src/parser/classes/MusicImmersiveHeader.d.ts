import Text from './misc/Text.js';
import MusicThumbnail from './MusicThumbnail.js';
import { YTNode } from '../helpers.js';
/*** Volumio-YouTube.js ***/
import Button from './Button.js';
declare class MusicImmersiveHeader extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    thumbnail: MusicThumbnail | null;
    /*** Volumio-YouTube.js ***/
    play_button: Button | null;
    start_radio_button: Button | null;
    constructor(data: any);
}
export default MusicImmersiveHeader;
