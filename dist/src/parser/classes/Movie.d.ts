import Author from './misc/Author.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
declare class Movie extends YTNode {
    static type: string;
    id: string;
    title: Text;
    description_snippet: Text | null;
    top_metadata_items: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers.js").SuperParsedResult<YTNode>;
    author: Author;
    duration: {
        text: string;
        seconds: number;
    };
    endpoint: NavigationEndpoint;
    badges: import("../helpers.js").SuperParsedResult<YTNode>;
    use_vertical_poster: boolean;
    show_action_menu: boolean;
    menu: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default Movie;
