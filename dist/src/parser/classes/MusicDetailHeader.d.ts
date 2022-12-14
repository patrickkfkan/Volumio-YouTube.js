import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';
declare class MusicDetailHeader extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    subtitle: Text;
    second_subtitle: Text;
    year: string;
    song_count: string;
    total_duration: string;
    thumbnails: Thumbnail[];
    badges: import("../helpers").SuperParsedResult<YTNode>;
    author?: {
        name: string;
        channel_id: string | undefined;
        endpoint: NavigationEndpoint | undefined;
    };
    menu: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default MusicDetailHeader;
