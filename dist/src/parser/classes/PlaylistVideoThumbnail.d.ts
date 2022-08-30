import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class PlaylistVideoThumbnail extends YTNode {
    static type: string;
    thumbnail: Thumbnail[];
    constructor(data: any);
}
export default PlaylistVideoThumbnail;
