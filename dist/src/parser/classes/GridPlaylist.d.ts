import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import NavigatableText from './misc/NavigatableText.js';
import { YTNode } from '../helpers.js';
declare class GridPlaylist extends YTNode {
    static type: string;
    id: string;
    title: Text;
    author?: PlaylistAuthor;
    badges: import("../helpers.js").SuperParsedResult<YTNode>;
    endpoint: NavigationEndpoint;
    view_playlist: NavigatableText;
    thumbnails: Thumbnail[];
    thumbnail_renderer: import("../helpers.js").SuperParsedResult<YTNode>;
    sidebar_thumbnails: Thumbnail[] | null;
    video_count: Text;
    video_count_short: Text;
    constructor(data: any);
}
export default GridPlaylist;
