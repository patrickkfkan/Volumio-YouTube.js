import Thumbnail from '../misc/Thumbnail';
import Text from '../misc/Text';
import { YTNode } from '../../helpers';
declare class CommentReplyDialog extends YTNode {
    static type: string;
    reply_button: import("../../helpers").SuperParsedResult<YTNode>;
    cancel_button: import("../../helpers").SuperParsedResult<YTNode>;
    author_thumbnail: Thumbnail[];
    placeholder: Text;
    error_message: Text;
    constructor(data: any);
}
export default CommentReplyDialog;
