"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class Poll extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.choices = data.choices.map((choice) => ({
            text: new Text_1.default(choice.text).toString(),
            select_endpoint: choice.selectServiceEndpoint ? new NavigationEndpoint_1.default(choice.selectServiceEndpoint) : null,
            deselect_endpoint: choice.deselectServiceEndpoint ? new NavigationEndpoint_1.default(choice.deselectServiceEndpoint) : null,
            vote_ratio_if_selected: (choice === null || choice === void 0 ? void 0 : choice.voteRatioIfSelected) || null,
            vote_percentage_if_selected: new Text_1.default(choice.votePercentageIfSelected),
            vote_ratio_if_not_selected: (choice === null || choice === void 0 ? void 0 : choice.voteRatioIfSelected) || null,
            vote_percentage_if_not_selected: new Text_1.default(choice.votePercentageIfSelected),
            image: choice.image ? Thumbnail_1.default.fromResponse(choice.image) : null
        }));
        if (data.type)
            this.poll_type = data.type;
        if (data.totalVotes)
            this.total_votes = new Text_1.default(data.totalVotes);
        if (data.liveChatPollId)
            this.live_chat_poll_id = data.liveChatPollId;
    }
}
Poll.type = 'Poll';
exports.default = Poll;
//# sourceMappingURL=Poll.js.map