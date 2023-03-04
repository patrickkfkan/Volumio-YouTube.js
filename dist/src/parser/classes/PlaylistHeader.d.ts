import Text from './misc/Text.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import { YTNode } from '../helpers.js';
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
    save_button: import("../helpers.js").SuperParsedResult<YTNode>;
    shuffle_play_button: import("../helpers.js").SuperParsedResult<YTNode>;
    menu: import("../helpers.js").SuperParsedResult<YTNode>;
    banner: YTNode | null;
    constructor(data: any);
}
export default PlaylistHeader;
