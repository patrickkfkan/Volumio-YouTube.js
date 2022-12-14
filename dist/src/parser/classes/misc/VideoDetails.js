"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Thumbnail_1 = __importDefault(require("./Thumbnail"));
class VideoDetails {
    constructor(data) {
        this.id = data.videoId;
        this.channel_id = data.channelId;
        this.title = data.title;
        this.duration = parseInt(data.lengthSeconds);
        this.keywords = data.keywords;
        this.is_owner_viewing = !!data.isOwnerViewing;
        this.short_description = data.shortDescription;
        this.thumbnail = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.allow_ratings = !!data.allowRatings;
        this.view_count = parseInt(data.viewCount);
        this.author = data.author;
        this.is_private = !!data.isPrivate;
        this.is_live_content = !!data.isLiveContent;
        this.is_crawlable = !!data.isCrawlable;
    }
}
exports.default = VideoDetails;
//# sourceMappingURL=VideoDetails.js.map