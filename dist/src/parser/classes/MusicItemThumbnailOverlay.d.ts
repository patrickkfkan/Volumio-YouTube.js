import MusicPlayButton from './MusicPlayButton';
import { YTNode } from '../helpers';
declare class MusicItemThumbnailOverlay extends YTNode {
    static type: string;
    content: MusicPlayButton | null;
    content_position: any;
    display_style: string;
    constructor(data: any);
}
export default MusicItemThumbnailOverlay;
