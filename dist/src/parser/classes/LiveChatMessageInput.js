import Text from './misc/Text.js';
import Parser from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
class LiveChatMessageInput extends YTNode {
    constructor(data) {
        super();
        this.author_name = new Text(data.authorName);
        this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
        this.send_button = Parser.parseItem(data.sendButton);
        this.target_id = data.targetId;
    }
}
LiveChatMessageInput.type = 'LiveChatMessageInput';
export default LiveChatMessageInput;
//# sourceMappingURL=LiveChatMessageInput.js.map