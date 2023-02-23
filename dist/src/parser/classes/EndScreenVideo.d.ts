import Text from './misc/Text.js';
import Author from './misc/Author.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class EndScreenVideo extends YTNode {
    static type: string;
    id: string;
    title: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers.js").SuperParsedResult<YTNode>;
    author: Author;
    endpoint: NavigationEndpoint;
    short_view_count: Text;
    badges: import("../helpers.js").SuperParsedResult<YTNode>;
    duration: {
        text: string;
        seconds: number;
    };
    constructor(data: any);
}
export default EndScreenVideo;
