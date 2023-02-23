import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class CommentActionButtons extends YTNode {
    constructor(data) {
        super();
        this.like_button = Parser.parseItem(data.likeButton);
        this.dislike_button = Parser.parseItem(data.dislikeButton);
        this.reply_button = Parser.parseItem(data.replyButton);
        this.creator_heart = Parser.parseItem(data.creatorHeart);
    }
}
CommentActionButtons.type = 'CommentActionButtons';
export default CommentActionButtons;
//# sourceMappingURL=CommentActionButtons.js.map