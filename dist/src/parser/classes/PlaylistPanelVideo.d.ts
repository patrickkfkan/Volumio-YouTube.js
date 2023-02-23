import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
declare class PlaylistPanelVideo extends YTNode {
    static type: string;
    title: Text;
    thumbnail: Thumbnail[];
    endpoint: NavigationEndpoint;
    selected: boolean;
    video_id: string;
    duration: {
        text: string;
        seconds: number;
    };
    author: string;
    album?: {
        id: string | undefined;
        name: string;
        year: string | undefined;
        endpoint: NavigationEndpoint | undefined;
    };
    artists?: {
        name: string;
        channel_id: string | undefined;
        endpoint: NavigationEndpoint | undefined;
    }[];
    badges: import("../helpers.js").ObservedArray<YTNode>;
    menu: YTNode | null;
    set_video_id: string | undefined;
    constructor(data: any);
}
export default PlaylistPanelVideo;
