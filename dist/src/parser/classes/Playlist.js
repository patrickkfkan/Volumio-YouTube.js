"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const index_1 = __importDefault(require("../index"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const PlaylistAuthor_1 = __importDefault(require("./misc/PlaylistAuthor"));
const helpers_1 = require("../helpers");
class Playlist extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.id = data.playlistId;
        this.title = new Text_1.default(data.title);
        this.author = ((_a = data.shortBylineText) === null || _a === void 0 ? void 0 : _a.simpleText) ?
            new Text_1.default(data.shortBylineText) :
            new PlaylistAuthor_1.default(data.longBylineText, data.ownerBadges, null);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail || { thumbnails: data.thumbnails.map((th) => th.thumbnails).flat(1) });
        this.video_count = new Text_1.default(data.thumbnailText);
        this.video_count_short = new Text_1.default(data.videoCountShortText);
        this.first_videos = index_1.default.parse(data.videos) || [];
        this.share_url = data.shareUrl || null;
        this.menu = index_1.default.parse(data.menu);
        this.badges = index_1.default.parse(data.ownerBadges);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.thumbnail_overlays = index_1.default.parse(data.thumbnailOverlays) || [];
    }
}
Playlist.type = 'Playlist';
exports.default = Playlist;
//# sourceMappingURL=Playlist.js.map