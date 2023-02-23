import Parser from '../../index.js';
import Thumbnail from '../misc/Thumbnail.js';
import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
class CommentSimplebox extends YTNode {
    constructor(data) {
        super();
        this.submit_button = Parser.parseItem(data.submitButton);
        this.cancel_button = Parser.parseItem(data.cancelButton);
        this.author_thumbnails = Thumbnail.fromResponse(data.authorThumbnail);
        this.placeholder = new Text(data.placeholderText);
        this.avatar_size = data.avatarSize;
    }
}
CommentSimplebox.type = 'CommentSimplebox';
export default CommentSimplebox;
//# sourceMappingURL=CommentSimplebox.js.map