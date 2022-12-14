import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
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
    badges: import("../helpers").SuperParsedResult<YTNode>;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    set_video_id: string | undefined;
    constructor(data: any);
}
export default PlaylistPanelVideo;
