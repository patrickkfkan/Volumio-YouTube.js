import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import MusicThumbnail from './MusicThumbnail.js';
import Text from './misc/Text.js';
/*** Volumio-YouTube.js ***/
import Button from './Button.js';
export default class MusicImmersiveHeader extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    thumbnail: MusicThumbnail | null;
    /*** Volumio-YouTube.js ***/
    play_button: Button | null;
    start_radio_button: Button | null;
    constructor(data: RawNode);
}
