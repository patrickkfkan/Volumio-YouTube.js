"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class CollaboratorInfoCardContent extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.channel_avatar = Thumbnail_1.default.fromResponse(data.channelAvatar);
        this.custom_text = new Text_1.default(data.customText);
        this.channel_name = new Text_1.default(data.channelName);
        this.subscriber_count = new Text_1.default(data.subscriberCountText);
        this.endpoint = new NavigationEndpoint_1.default(data.endpoint);
    }
}
CollaboratorInfoCardContent.type = 'CollaboratorInfoCardContent';
exports.default = CollaboratorInfoCardContent;
//# sourceMappingURL=CollaboratorInfoCardContent.js.map