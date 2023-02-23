import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Author from './misc/Author.js';
import type Menu from './menus/Menu.js';
import { YTNode } from '../helpers.js';
declare class GridVideo extends YTNode {
    static type: string;
    id: string;
    title: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers.js").ObservedArray<YTNode>;
    rich_thumbnail: any;
    published: Text;
    duration: Text | null;
    author: Author;
    views: Text;
    short_view_count: Text;
    endpoint: NavigationEndpoint;
    menu: Menu | null;
    constructor(data: any);
}
export default GridVideo;
