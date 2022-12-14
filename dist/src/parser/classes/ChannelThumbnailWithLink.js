"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class ChannelThumbnailWithLink extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.label = data.accessibility.accessibilityData.label;
    }
}
ChannelThumbnailWithLink.type = 'ChannelThumbnailWithLink';
exports.default = ChannelThumbnailWithLink;
//# sourceMappingURL=ChannelThumbnailWithLink.js.map