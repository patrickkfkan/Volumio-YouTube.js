"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../../helpers");
class LiveChatPlaceholderItem extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    }
}
LiveChatPlaceholderItem.type = 'LiveChatPlaceholderItem';
exports.default = LiveChatPlaceholderItem;
//# sourceMappingURL=LiveChatPlaceholderItem.js.map