import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';
declare class CommentsEntryPointHeader extends YTNode {
    static type: string;
    header?: Text;
    comment_count?: Text;
    teaser_avatar?: Thumbnail[];
    teaser_content?: Text;
    simplebox_placeholder?: Text;
    constructor(data: any);
}
export default CommentsEntryPointHeader;
