import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class PlaylistInfoCardContent extends YTNode {
    static type: string;
    title: Text;
    thumbnails: Thumbnail[];
    video_count: Text;
    channel_name: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default PlaylistInfoCardContent;
