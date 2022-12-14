"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class ChannelMetadata extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        this.description = data.description;
        this.url = data.channelUrl;
        this.rss_urls = data.rssUrl;
        this.vanity_channel_url = data.vanityChannelUrl;
        this.external_id = data.externalId;
        this.is_family_safe = data.isFamilySafe;
        this.keywords = data.keywords;
        this.avatar = Thumbnail_1.default.fromResponse(data.avatar);
        this.available_countries = data.availableCountryCodes;
        this.android_deep_link = data.androidDeepLink;
        this.android_appindexing_link = data.androidAppindexingLink;
        this.ios_appindexing_link = data.iosAppindexingLink;
    }
}
ChannelMetadata.type = 'ChannelMetadata';
exports.default = ChannelMetadata;
//# sourceMappingURL=ChannelMetadata.js.map