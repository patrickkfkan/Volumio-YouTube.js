import Text from './misc/Text';
import PlaylistAuthor from './misc/PlaylistAuthor';
import { YTNode } from '../helpers';
declare class PlaylistHeader extends YTNode {
    static type: string;
    id: string;
    title: Text;
    stats: Text[];
    brief_stats: Text[];
    author: PlaylistAuthor;
    description: Text;
    num_videos: Text;
    view_count: Text;
    can_share: boolean;
    can_delete: boolean;
    is_editable: boolean;
    privacy: string;
    save_button: import("../helpers").SuperParsedResult<YTNode>;
    shuffle_play_button: import("../helpers").SuperParsedResult<YTNode>;
    menu: import("../helpers").SuperParsedResult<YTNode>;
    constructor(data: any);
}
export default PlaylistHeader;
