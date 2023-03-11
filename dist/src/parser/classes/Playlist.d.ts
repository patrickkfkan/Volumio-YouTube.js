import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import { YTNode } from '../helpers.js';
import NavigatableText from './misc/NavigatableText.js';
declare class Playlist extends YTNode {
    static type: string;
    id: string;
    title: Text;
    author: Text | PlaylistAuthor;
    thumbnails: Thumbnail[];
    video_count: Text;
    video_count_short: Text;
    first_videos: import("../helpers.js").ObservedArray<YTNode>;
    share_url: string | null;
    menu: YTNode | null;
    badges: import("../helpers.js").ObservedArray<YTNode>;
    endpoint: NavigationEndpoint;
    thumbnail_overlays: import("../helpers.js").ObservedArray<YTNode>;
    view_playlist?: NavigatableText;
    constructor(data: any);
}
export default Playlist;
