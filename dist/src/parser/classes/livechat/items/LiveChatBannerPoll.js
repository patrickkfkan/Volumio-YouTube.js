"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../../index"));
const Text_1 = __importDefault(require("../../misc/Text"));
const Thumbnail_1 = __importDefault(require("../../misc/Thumbnail"));
const helpers_1 = require("../../../helpers");
class LiveChatBannerPoll extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.poll_question = new Text_1.default(data.pollQuestion);
        this.author_photo = Thumbnail_1.default.fromResponse(data.authorPhoto);
        this.choices = data.pollChoices.map((choice) => ({
            option_id: choice.pollOptionId,
            text: new Text_1.default(choice.text).toString()
        }));
        this.collapsed_state_entity_key = data.collapsedStateEntityKey;
        this.live_chat_poll_state_entity_key = data.liveChatPollStateEntityKey;
        this.context_menu_button = index_1.default.parse(data.contextMenuButton);
    }
}
LiveChatBannerPoll.type = 'LiveChatBannerPoll';
exports.default = LiveChatBannerPoll;
//# sourceMappingURL=LiveChatBannerPoll.js.map