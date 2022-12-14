"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const Thumbnail_1 = __importDefault(require("../misc/Thumbnail"));
const Text_1 = __importDefault(require("../misc/Text"));
const helpers_1 = require("../../helpers");
class CommentReplyDialog extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.reply_button = index_1.default.parse(data.replyButton);
        this.cancel_button = index_1.default.parse(data.cancelButton);
        this.author_thumbnail = Thumbnail_1.default.fromResponse(data.authorThumbnail);
        this.placeholder = new Text_1.default(data.placeholderText);
        this.error_message = new Text_1.default(data.errorMessage);
    }
}
CommentReplyDialog.type = 'CommentReplyDialog';
exports.default = CommentReplyDialog;
//# sourceMappingURL=CommentReplyDialog.js.map