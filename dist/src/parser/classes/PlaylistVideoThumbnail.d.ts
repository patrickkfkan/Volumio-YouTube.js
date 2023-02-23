import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
declare class PlaylistVideoThumbnail extends YTNode {
    static type: string;
    thumbnail: Thumbnail[];
    constructor(data: any);
}
export default PlaylistVideoThumbnail;
