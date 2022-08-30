import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class MusicThumbnail extends YTNode {
    static type: string;
    contents: Thumbnail[];
    constructor(data: any);
}
export default MusicThumbnail;
