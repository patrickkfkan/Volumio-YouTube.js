"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../index"));
const helpers_1 = require("../../helpers");
class CommentReplies extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.contents = index_1.default.parse(data.contents);
        this.view_replies = index_1.default.parse(data.viewReplies);
        this.hide_replies = index_1.default.parse(data.hideReplies);
    }
}
CommentReplies.type = 'CommentReplies';
exports.default = CommentReplies;
//# sourceMappingURL=CommentReplies.js.map