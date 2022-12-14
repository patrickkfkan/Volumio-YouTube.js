"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class CommentActionButtons extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.like_button = index_1.default.parse(data.likeButton);
        this.dislike_button = index_1.default.parse(data.dislikeButton);
        this.reply_button = index_1.default.parse(data.replyButton);
    }
}
CommentActionButtons.type = 'CommentActionButtons';
exports.default = CommentActionButtons;
//# sourceMappingURL=CommentActionButtons.js.map