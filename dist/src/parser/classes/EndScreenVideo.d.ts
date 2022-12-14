import Text from './misc/Text';
import Author from './misc/Author';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class EndScreenVideo extends YTNode {
    static type: string;
    id: string;
    title: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers").SuperParsedResult<YTNode>;
    author: Author;
    endpoint: NavigationEndpoint;
    short_view_count: Text;
    badges: import("../helpers").SuperParsedResult<YTNode>;
    duration: {
        text: string;
        seconds: number;
    };
    constructor(data: any);
}
export default EndScreenVideo;
