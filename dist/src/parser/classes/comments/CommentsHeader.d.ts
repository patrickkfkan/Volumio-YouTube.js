import Text from '../misc/Text';
import Thumbnail from '../misc/Thumbnail';
import { YTNode } from '../../helpers';
declare class CommentsHeader extends YTNode {
    static type: string;
    title: Text;
    count: Text;
    comments_count: Text;
    create_renderer: YTNode | null;
    sort_menu: import("../../helpers").SuperParsedResult<YTNode>;
    custom_emojis: {
        emoji_id: string;
        shortcuts: string[];
        search_terms: string[];
        image: Thumbnail[];
        is_custom_emoji: boolean;
    }[] | null;
    constructor(data: any);
}
export default CommentsHeader;
