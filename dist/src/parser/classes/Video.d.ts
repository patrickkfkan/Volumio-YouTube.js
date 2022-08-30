import Text from './misc/Text';
import Author from './misc/Author';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class Video extends YTNode {
    static type: string;
    id: string;
    title: Text;
    description_snippet: Text | null;
    snippets: {
        text: Text;
        hover_text: Text;
    }[];
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers").SuperParsedResult<YTNode>;
    rich_thumbnail: any;
    author: Author;
    endpoint: NavigationEndpoint;
    published: Text;
    view_count: Text;
    short_view_count: Text;
    upcoming: Date | undefined;
    duration: {
        text: string;
        seconds: number;
    };
    show_action_menu: boolean;
    is_watched: boolean;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
    get description(): string;
    get is_upcoming(): boolean | undefined;
    get best_thumbnail(): Thumbnail | undefined;
}
export default Video;
