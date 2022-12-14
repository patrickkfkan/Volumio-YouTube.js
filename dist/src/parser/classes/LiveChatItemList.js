"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class LiveChatItemList extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.max_items_to_display = data.maxItemsToDisplay;
        this.more_comments_below_button = index_1.default.parse(data.moreCommentsBelowButton);
    }
}
LiveChatItemList.type = 'LiveChatItemList';
exports.default = LiveChatItemList;
//# sourceMappingURL=LiveChatItemList.js.map