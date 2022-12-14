import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import PlaylistAuthor from './misc/PlaylistAuthor';
import { YTNode } from '../helpers';
declare class Playlist extends YTNode {
    static type: string;
    id: string;
    title: Text;
    author: Text | PlaylistAuthor;
    thumbnails: Thumbnail[];
    video_count: Text;
    video_count_short: Text;
    first_videos: import("../helpers").SuperParsedResult<YTNode>;
    share_url: string | null;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    badges: import("../helpers").SuperParsedResult<YTNode>;
    endpoint: NavigationEndpoint;
    thumbnail_overlays: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default Playlist;
