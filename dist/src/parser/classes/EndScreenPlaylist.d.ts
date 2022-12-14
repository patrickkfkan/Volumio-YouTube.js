import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class EndScreenPlaylist extends YTNode {
    static type: string;
    id: string;
    title: Text;
    author: Text;
    endpoint: NavigationEndpoint;
    thumbnails: Thumbnail[];
    video_count: Text;
    constructor(data: any);
}
export default EndScreenPlaylist;
