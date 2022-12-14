"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const index_1 = __importDefault(require("../index"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class LiveChatMessageInput extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.author_name = new Text_1.default(data.authorName);
        this.author_photo = Thumbnail_1.default.fromResponse(data.authorPhoto);
        this.send_button = index_1.default.parse(data.sendButton);
        this.target_id = data.targetId;
    }
}
LiveChatMessageInput.type = 'LiveChatMessageInput';
exports.default = LiveChatMessageInput;
//# sourceMappingURL=LiveChatMessageInput.js.map