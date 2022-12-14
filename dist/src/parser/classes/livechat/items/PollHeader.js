"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("../../misc/Text"));
const Thumbnail_1 = __importDefault(require("../../misc/Thumbnail"));
const index_1 = __importDefault(require("../../../index"));
const helpers_1 = require("../../../helpers");
class PollHeader extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.poll_question = new Text_1.default(data.pollQuestion);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.metadata = new Text_1.default(data.metadataText);
        this.live_chat_poll_type = data.liveChatPollType;
        this.context_menu_button = index_1.default.parse(data.contextMenuButton);
    }
}
PollHeader.type = 'PollHeader';
exports.default = PollHeader;
//# sourceMappingURL=PollHeader.js.map