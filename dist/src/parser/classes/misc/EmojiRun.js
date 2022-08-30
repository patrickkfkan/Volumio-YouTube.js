"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./Thumbnail"));
class EmojiRun {
    constructor(data) {
        var _a, _b, _c;
        this.text =
            ((_a = data.emoji) === null || _a === void 0 ? void 0 : _a.emojiId) ||
                ((_c = (_b = data.emoji) === null || _b === void 0 ? void 0 : _b.shortcuts) === null || _c === void 0 ? void 0 : _c[0]) ||
                '';
        this.emoji = {
            emoji_id: data.emoji.emojiId,
            shortcuts: data.emoji.shortcuts,
            search_terms: data.emoji.searchTerms,
            image: Thumbnail_1.default.fromResponse(data.emoji.image)
        };
    }
}
exports.default = EmojiRun;
//# sourceMappingURL=EmojiRun.js.map