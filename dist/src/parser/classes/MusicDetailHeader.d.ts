import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
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
    badges: import("../helpers.js").SuperParsedResult<YTNode>;
    author?: {
        name: string;
        channel_id: string | undefined;
        endpoint: NavigationEndpoint | undefined;
    };
    menu: import("../helpers.js").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default MusicDetailHeader;
