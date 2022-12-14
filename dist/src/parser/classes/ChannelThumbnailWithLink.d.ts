import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class ChannelThumbnailWithLink extends YTNode {
    static type: string;
    thumbnails: Thumbnail[];
    endpoint: NavigationEndpoint;
    label: string;
    constructor(data: any);
}
export default ChannelThumbnailWithLink;
