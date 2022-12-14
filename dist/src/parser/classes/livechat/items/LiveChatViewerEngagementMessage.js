"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LiveChatTextMessage_1 = __importDefault(require("./LiveChatTextMessage"));
const index_1 = __importDefault(require("../../../index"));
class LiveChatViewerEngagementMessage extends LiveChatTextMessage_1.default {
    constructor(data) {
        super(data);
        delete this.author;
        delete this.menu_endpoint;
        this.icon_type = data.icon.iconType;
        this.action_button = index_1.default.parse(data.actionButton);
    }
}
LiveChatViewerEngagementMessage.type = 'LiveChatViewerEngagementMessage';
exports.default = LiveChatViewerEngagementMessage;
//# sourceMappingURL=LiveChatViewerEngagementMessage.js.map