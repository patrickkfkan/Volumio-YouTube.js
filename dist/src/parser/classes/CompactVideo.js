"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Author_1 = __importDefault(require("./misc/Author"));
const Utils_1 = require("../../utils/Utils");
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class CompactVideo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail) || null;
        this.rich_thumbnail = data.richThumbnail && index_1.default.parse(data.richThumbnail);
        this.title = new Text_1.default(data.title);
        this.author = new Author_1.default(data.longBylineText, data.ownerBadges, data.channelThumbnail);
        this.view_count = new Text_1.default(data.viewCountText);
        this.short_view_count = new Text_1.default(data.shortViewCountText);
        this.published = new Text_1.default(data.publishedTimeText);
        this.duration = {
            text: new Text_1.default(data.lengthText).toString(),
            seconds: (0, Utils_1.timeToSeconds)(new Text_1.default(data.lengthText).toString())
        };
        this.thumbnail_overlays = index_1.default.parse(data.thumbnailOverlays);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.menu = index_1.default.parse(data.menu);
    }
    get best_thumbnail() {
        return this.thumbnails[0];
    }
}
CompactVideo.type = 'CompactVideo';
exports.default = CompactVideo;
//# sourceMappingURL=CompactVideo.js.map