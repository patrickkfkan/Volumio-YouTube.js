import Text from './misc/Text';
import Author from './misc/Author';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class CompactVideo extends YTNode {
    static type: string;
    id: string;
    thumbnails: Thumbnail[];
    rich_thumbnail: any;
    title: Text;
    author: Author;
    view_count: Text;
    short_view_count: Text;
    published: Text;
    duration: {
        text: string;
        seconds: number;
    };
    thumbnail_overlays: import("../helpers").SuperParsedResult<YTNode>;
    endpoint: NavigationEndpoint;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
    get best_thumbnail(): Thumbnail;
}
export default CompactVideo;
