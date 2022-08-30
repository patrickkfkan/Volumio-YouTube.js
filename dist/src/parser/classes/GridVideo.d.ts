import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import Author from './misc/Author';
import { YTNode } from '../helpers';
declare class GridVideo extends YTNode {
    static type: string;
    id: string;
    title: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers").SuperParsedResult<YTNode>;
    rich_thumbnail: any;
    published: Text;
    duration: Text | string;
    author: Author;
    views: Text;
    short_view_count: Text;
    endpoint: NavigationEndpoint;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default GridVideo;
