import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import PlaylistAuthor from './misc/PlaylistAuthor';
import NavigationEndpoint from './NavigationEndpoint';
import NavigatableText from './misc/NavigatableText';
import { YTNode } from '../helpers';
declare class GridPlaylist extends YTNode {
    static type: string;
    id: string;
    title: Text;
    author?: PlaylistAuthor;
    badges: import("../helpers").SuperParsedResult<YTNode>;
    endpoint: NavigationEndpoint;
    view_playlist: NavigatableText;
    thumbnails: Thumbnail[];
    thumbnail_renderer: import("../helpers").SuperParsedResult<YTNode>;
    sidebar_thumbnails: Thumbnail[] | null;
    video_count: Text;
    video_count_short: Text;
    constructor(data: any);
}
export default GridPlaylist;
