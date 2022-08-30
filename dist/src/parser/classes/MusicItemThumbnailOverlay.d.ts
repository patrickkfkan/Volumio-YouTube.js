import { YTNode } from '../helpers';
declare class MusicItemThumbnailOverlay extends YTNode {
    static type: string;
    content: import("../helpers").SuperParsedResult<YTNode>;
    content_position: any;
    display_style: string;
    constructor(data: any);
}
export default MusicItemThumbnailOverlay;
