import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class VideoInfoCardContent extends YTNode {
    static type: string;
    title: Text;
    channel_name: Text;
    view_count: Text;
    video_thumbnails: Thumbnail[];
    duration: Text;
    endpoint: NavigationEndpoint;
    constructor(data: any);
}
export default VideoInfoCardContent;
