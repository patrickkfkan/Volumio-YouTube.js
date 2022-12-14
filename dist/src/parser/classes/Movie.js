"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Author_1 = __importDefault(require("./misc/Author"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Utils_1 = require("../../utils/Utils");
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class Movie extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        const overlay_time_status = ((_a = data.thumbnailOverlays
            .find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer.text) || 'N/A';
        this.id = data.videoId;
        this.title = new Text_1.default(data.title);
        this.description_snippet = data.descriptionSnippet ? new Text_1.default(data.descriptionSnippet) : null;
        this.top_metadata_items = new Text_1.default(data.topMetadataItems);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.thumbnail_overlays = index_1.default.parse(data.thumbnailOverlays);
        this.author = new Author_1.default(data.longBylineText, data.ownerBadges, (_c = (_b = data.channelThumbnailSupportedRenderers) === null || _b === void 0 ? void 0 : _b.channelThumbnailWithLinkRenderer) === null || _c === void 0 ? void 0 : _c.thumbnail);
        this.duration = {
            text: data.lengthText ? new Text_1.default(data.lengthText).text : new Text_1.default(overlay_time_status).text,
            seconds: (0, Utils_1.timeToSeconds)(data.lengthText ? new Text_1.default(data.lengthText).text : new Text_1.default(overlay_time_status).text)
        };
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.badges = index_1.default.parse(data.badges);
        this.use_vertical_poster = data.useVerticalPoster;
        this.show_action_menu = data.showActionMenu;
        this.menu = index_1.default.parse(data.menu);
    }
}
Movie.type = 'Movie';
exports.default = Movie;
//# sourceMappingURL=Movie.js.map