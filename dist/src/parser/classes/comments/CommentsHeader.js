import Parser from '../../index.js';
import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';
class CommentsHeader extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text(data.titleText);
        this.count = new Text(data.countText);
        this.comments_count = new Text(data.commentsCount);
        this.create_renderer = Parser.parseItem(data.createRenderer);
        this.sort_menu = Parser.parseItem(data.sortMenu);
        this.custom_emojis = ((_a = data.customEmojis) === null || _a === void 0 ? void 0 : _a.map((emoji) => ({
            emoji_id: emoji.emojiId,
            shortcuts: emoji.shortcuts,
            search_terms: emoji.searchTerms,
            image: Thumbnail.fromResponse(emoji.image),
            is_custom_emoji: emoji.isCustomEmoji
        }))) || null;
    }
}
CommentsHeader.type = 'CommentsHeader';
export default CommentsHeader;
//# sourceMappingURL=CommentsHeader.js.map