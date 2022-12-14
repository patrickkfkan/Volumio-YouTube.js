import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import MusicItemThumbnailOverlay from './MusicItemThumbnailOverlay';
import Menu from './menus/Menu';
import { YTNode } from '../helpers';
declare class MusicResponsiveListItem extends YTNode {
    #private;
    static type: string;
    endpoint: NavigationEndpoint | null;
    item_type: string | undefined;
    index: Text | undefined;
    thumbnails: Thumbnail[];
    badges: import("../helpers").ObservedArray<YTNode>;
    menu: Menu | null;
    overlay: MusicItemThumbnailOverlay | null;
    id?: string;
    title?: string | Text;
    duration?: {
        text: string;
        seconds: number;
    };
    album?: {
        id?: string;
        name: string;
        endpoint?: NavigationEndpoint;
    };
    artists?: {
        name: string;
        channel_id?: string;
        endpoint?: NavigationEndpoint;
    }[];
    views?: string;
    authors?: {
        name: string;
        channel_id?: string;
        endpoint?: NavigationEndpoint;
    }[];
    name?: string;
    subtitle?: Text;
    subscribers?: string;
    song_count?: string;
    author?: {
        name: string;
        channel_id?: string;
        endpoint?: NavigationEndpoint;
    };
    item_count?: string | undefined;
    year?: string;
    constructor(data: any);
}
export default MusicResponsiveListItem;
