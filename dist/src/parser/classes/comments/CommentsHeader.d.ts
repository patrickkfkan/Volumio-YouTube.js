import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import type SortFilterSubMenu from '../SortFilterSubMenu.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
declare class CommentsHeader extends YTNode {
    static type: string;
    title: Text;
    count: Text;
    comments_count: Text;
    create_renderer: YTNode | null;
    sort_menu: SortFilterSubMenu | null;
    custom_emojis: {
        emoji_id: string;
        shortcuts: string[];
        search_terms: string[];
        image: Thumbnail[];
        is_custom_emoji: boolean;
    }[] | null;
    constructor(data: RawNode);
}
export default CommentsHeader;
