import Parser from '../../index.js';
import Thumbnail from '../misc/Thumbnail.js';
import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class CommentReplyDialog extends YTNode {
    constructor(data) {
        super();
        this.reply_button = Parser.parseItem(data.replyButton);
        this.cancel_button = Parser.parseItem(data.cancelButton);
        this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
        this.placeholder = new Text(data.placeholderText);
        this.error_message = new Text(data.errorMessage);
    }
}
CommentReplyDialog.type = 'CommentReplyDialog';
export default CommentReplyDialog;
//# sourceMappingURL=CommentReplyDialog.js.map