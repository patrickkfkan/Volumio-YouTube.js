"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../misc/Text"));
const Thumbnail_1 = __importDefault(require("../misc/Thumbnail"));
const helpers_1 = require("../../helpers");
class CommentsEntryPointHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.header = new Text_1.default(data.headerText);
        this.comment_count = new Text_1.default(data.commentCount);
        this.teaser_avatar = Thumbnail_1.default.fromResponse(data.teaserAvatar || data.simpleboxAvatar);
        this.teaser_content = new Text_1.default(data.teaserContent);
        this.simplebox_placeholder = new Text_1.default(data.simpleboxPlaceholder);
    }
}
CommentsEntryPointHeader.type = 'CommentsEntryPointHeader';
exports.default = CommentsEntryPointHeader;
//# sourceMappingURL=CommentsEntryPointHeader.js.map