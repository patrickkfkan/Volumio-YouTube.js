import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type Menu from './menus/Menu.js';
import { YTNode } from '../helpers.js';
declare class PlaylistVideo extends YTNode {
    static type: string;
    id: string;
    index: Text;
    title: Text;
    author: PlaylistAuthor;
    thumbnails: Thumbnail[];
    thumbnail_overlays: import("../helpers.js").ObservedArray<YTNode>;
    set_video_id: string | undefined;
    endpoint: NavigationEndpoint;
    is_playable: boolean;
    menu: Menu | null;
    upcoming: Date | undefined;
    duration: {
        text: string;
        seconds: number;
    };
    constructor(data: any);
    get is_live(): boolean;
    get is_upcoming(): boolean;
}
export default PlaylistVideo;
