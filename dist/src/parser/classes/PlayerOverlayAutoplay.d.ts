import Text from './misc/Text';
import Author from './misc/Author';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';
declare class PlayerOverlayAutoplay extends YTNode {
    static type: string;
    title: Text;
    video_id: string;
    video_title: Text;
    short_view_count: Text;
    prefer_immediate_redirect: any;
    count_down_secs_for_fullscreen: any;
    published: Text;
    background: Thumbnail[];
    thumbnail_overlays: import("../helpers").SuperParsedResult<YTNode>;
    author: Author;
    cancel_button: import("../helpers").SuperParsedResult<YTNode>;
    next_button: import("../helpers").SuperParsedResult<YTNode>;
    close_button: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default PlayerOverlayAutoplay;
