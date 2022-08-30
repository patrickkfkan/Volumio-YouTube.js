import Text from './misc/Text';
import MusicThumbnail from './MusicThumbnail';
import { YTNode } from '../helpers';
import Button from './Button';
declare class MusicImmersiveHeader extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    thumbnail: MusicThumbnail | null;
    play_button: Button | null;
    start_radio_button: Button | null;
    constructor(data: any);
}
export default MusicImmersiveHeader;
