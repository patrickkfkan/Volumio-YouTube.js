"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Text_1 = __importDefault(require("./misc/Text"));
const index_1 = __importDefault(require("../index"));
const helpers_1 = require("../helpers");
class ChannelAboutFullMetadata extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.channelId;
        this.name = new Text_1.default(data.title);
        this.avatar = Thumbnail_1.default.fromResponse(data.avatar);
        this.canonical_channel_url = data.canonicalChannelUrl;
        this.views = new Text_1.default(data.viewCountText);
        this.joined = new Text_1.default(data.joinedDateText);
        this.description = new Text_1.default(data.description);
        this.email_reveal = new NavigationEndpoint_1.default(data.onBusinessEmailRevealClickCommand);
        this.can_reveal_email = !data.signInForBusinessEmail;
        this.country = new Text_1.default(data.country);
        this.buttons = index_1.default.parse(data.actionButtons);
    }
}
ChannelAboutFullMetadata.type = 'ChannelAboutFullMetadata';
exports.default = ChannelAboutFullMetadata;
//# sourceMappingURL=ChannelAboutFullMetadata.js.map