"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Author_1 = __importDefault(require("./misc/Author"));
const helpers_1 = require("../helpers");
class GridVideo extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        const length_alt = (_a = data.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer;
        this.id = data.videoId;
        this.title = new Text_1.default(data.title);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.thumbnail_overlays = index_1.default.parse(data.thumbnailOverlays);
        this.rich_thumbnail = data.richThumbnail && index_1.default.parse(data.richThumbnail);
        this.published = new Text_1.default(data.publishedTimeText);
        this.duration = data.lengthText ? new Text_1.default(data.lengthText) : (length_alt === null || length_alt === void 0 ? void 0 : length_alt.text) ? new Text_1.default(length_alt.text) : '';
        this.author = data.shortBylineText && new Author_1.default(data.shortBylineText, data.ownerBadges);
        this.views = new Text_1.default(data.viewCountText);
        this.short_view_count = new Text_1.default(data.shortViewCountText);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.menu = index_1.default.parse(data.menu);
    }
}
GridVideo.type = 'GridVideo';
exports.default = GridVideo;
//# sourceMappingURL=GridVideo.js.map