import Author from './misc/Author';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';
declare class Movie extends YTNode {
    static type: string;
    id: string;
    title: Text;
    description_snippet: Text | null;
    top_metadata_items: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers").SuperParsedResult<YTNode>;
    author: Author;
    duration: {
        text: string;
        seconds: number;
    };
    endpoint: NavigationEndpoint;
    badges: import("../helpers").SuperParsedResult<YTNode>;
    use_vertical_poster: boolean;
    show_action_menu: boolean;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default Movie;
