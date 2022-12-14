import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import PlaylistAuthor from './misc/PlaylistAuthor';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class PlaylistVideo extends YTNode {
    static type: string;
    id: string;
    index: Text;
    title: Text;
    author: PlaylistAuthor;
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers").SuperParsedResult<YTNode>;
    set_video_id: string | undefined;
    endpoint: NavigationEndpoint;
    is_playable: boolean;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    duration: {
        text: string;
        seconds: number;
    };
    constructor(data: any);
}
export default PlaylistVideo;
