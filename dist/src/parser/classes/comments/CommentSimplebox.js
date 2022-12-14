"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const Thumbnail_1 = __importDefault(require("../misc/Thumbnail"));
const Text_1 = __importDefault(require("../misc/Text"));
const helpers_1 = require("../../helpers");
class CommentSimplebox extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.submit_button = index_1.default.parse(data.submitButton);
        this.cancel_button = index_1.default.parse(data.cancelButton);
        this.author_thumbnails = Thumbnail_1.default.fromResponse(data.authorThumbnail);
        this.placeholder = new Text_1.default(data.placeholderText);
        this.avatar_size = data.avatarSize;
    }
}
CommentSimplebox.type = 'CommentSimplebox';
exports.default = CommentSimplebox;
//# sourceMappingURL=CommentSimplebox.js.map