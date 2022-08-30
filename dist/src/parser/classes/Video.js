"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Author_1 = __importDefault(require("./misc/Author"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Utils_1 = require("../../utils/Utils");
const helpers_1 = require("../helpers");
class Video extends helpers_1.YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        const overlay_time_status = ((_a = data.thumbnailOverlays
            .find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer.text) || 'N/A';
        this.id = data.videoId;
        this.title = new Text_1.default(data.title);
        this.description_snippet = data.descriptionSnippet ? new Text_1.default(data.descriptionSnippet) : null;
        this.snippets = ((_b = data.detailedMetadataSnippets) === null || _b === void 0 ? void 0 : _b.map((snippet) => ({
            text: new Text_1.default(snippet.snippetText),
            hover_text: new Text_1.default(snippet.snippetHoverText)
        }))) || [];
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.thumbnail_overlays = index_1.default.parse(data.thumbnailOverlays);
        this.rich_thumbnail = data.richThumbnail && index_1.default.parse(data.richThumbnail);
        this.author = new Author_1.default(data.ownerText, data.ownerBadges, (_d = (_c = data.channelThumbnailSupportedRenderers) === null || _c === void 0 ? void 0 : _c.channelThumbnailWithLinkRenderer) === null || _d === void 0 ? void 0 : _d.thumbnail);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.published = new Text_1.default(data.publishedTimeText);
        this.view_count = new Text_1.default(data.viewCountText);
        this.short_view_count = new Text_1.default(data.shortViewCountText);
        const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
        if (upcoming) {
            this.upcoming = new Date(upcoming);
        }
        this.duration = {
            text: data.lengthText ? new Text_1.default(data.lengthText).text : new Text_1.default(overlay_time_status).text,
            seconds: (0, Utils_1.timeToSeconds)(data.lengthText ? new Text_1.default(data.lengthText).text : new Text_1.default(overlay_time_status).text)
        };
        this.show_action_menu = data.showActionMenu;
        this.is_watched = data.isWatched || false;
        this.menu = index_1.default.parse(data.menu);
    }
    get description() {
        var _a;
        if (this.snippets.length > 0) {
            return this.snippets.map((snip) => snip.text.toString()).join('');
        }
        return ((_a = this.description_snippet) === null || _a === void 0 ? void 0 : _a.toString()) || '';
    }
    /*
    Get is_live() {
      return this.badges.some((badge) => badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW');
    }
    */
    get is_upcoming() {
        return this.upcoming && this.upcoming > new Date();
    }
    /*
    Get has_captions() {
      return this.badges.some((badge) => badge.label === 'CC');
    }*/
    get best_thumbnail() {
        return this.thumbnails[0];
    }
}
Video.type = 'Video';
exports.default = Video;
//# sourceMappingURL=Video.js.map