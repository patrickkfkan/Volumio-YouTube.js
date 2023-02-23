import Text from './misc/Text.js';
import Author from './misc/Author.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type Menu from './menus/Menu.js';
import MetadataBadge from './MetadataBadge.js';
import { YTNode } from '../helpers.js';
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
    badges: MetadataBadge[];
    duration: {
        text: string;
        seconds: number;
    };
    thumbnail_overlays: import("../helpers.js").ObservedArray<YTNode>;
    endpoint: NavigationEndpoint;
    menu: Menu | null;
    constructor(data: any);
    get best_thumbnail(): Thumbnail;
    get is_fundraiser(): boolean;
    get is_live(): boolean;
    get is_new(): boolean;
    get is_premiere(): boolean;
}
export default CompactVideo;
