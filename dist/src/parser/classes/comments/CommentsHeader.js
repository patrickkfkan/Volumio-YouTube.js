"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const Text_1 = __importDefault(require("../misc/Text"));
const Thumbnail_1 = __importDefault(require("../misc/Thumbnail"));
const helpers_1 = require("../../helpers");
class CommentsHeader extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text_1.default(data.titleText);
        this.count = new Text_1.default(data.countText);
        this.comments_count = new Text_1.default(data.commentsCount);
        this.create_renderer = index_1.default.parseItem(data.createRenderer);
        this.sort_menu = index_1.default.parse(data.sortMenu);
        this.custom_emojis = ((_a = data.customEmojis) === null || _a === void 0 ? void 0 : _a.map((emoji) => ({
            emoji_id: emoji.emojiId,
            shortcuts: emoji.shortcuts,
            search_terms: emoji.searchTerms,
            image: Thumbnail_1.default.fromResponse(emoji.image),
            is_custom_emoji: emoji.isCustomEmoji
        }))) || null;
    }
}
CommentsHeader.type = 'CommentsHeader';
exports.default = CommentsHeader;
//# sourceMappingURL=CommentsHeader.js.map