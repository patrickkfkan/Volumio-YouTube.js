"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const helpers_1 = require("../helpers");
class PlayerMicroformat extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.description = new Text_1.default(data.description);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.embed = {
            iframe_url: data.embed.iframeUrl,
            flash_url: data.embed.flashUrl,
            flash_secure_url: data.embed.flashSecureUrl,
            width: data.embed.width,
            height: data.embed.height
        };
        this.length_seconds = parseInt(data.lengthSeconds);
        this.channel = {
            id: data.externalChannelId,
            name: data.ownerChannelName,
            url: data.ownerProfileUrl
        };
        this.is_family_safe = !!data.isFamilySafe;
        this.is_unlisted = !!data.isUnlisted;
        this.has_ypc_metadata = !!data.hasYpcMetadata;
        this.view_count = parseInt(data.viewCount);
        this.category = data.category;
        this.publish_date = data.publishDate;
        this.upload_date = data.uploadDate;
        this.available_countries = data.availableCountries;
    }
}
PlayerMicroformat.type = 'PlayerMicroformat';
exports.default = PlayerMicroformat;
//# sourceMappingURL=PlayerMicroformat.js.map