import Thumbnail from '../misc/Thumbnail.js';
import Text from '../misc/Text.js';
import type Button from '../Button.js';
import { YTNode } from '../../helpers.js';
declare class CommentReplyDialog extends YTNode {
    static type: string;
    reply_button: Button | null;
    cancel_button: Button | null;
    author_thumbnail: Thumbnail[];
    placeholder: Text;
    error_message: Text;
    constructor(data: any);
}
export default CommentReplyDialog;
