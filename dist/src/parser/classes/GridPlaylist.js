"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const index_1 = __importDefault(require("../index"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const PlaylistAuthor_1 = __importDefault(require("./misc/PlaylistAuthor"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const NavigatableText_1 = __importDefault(require("./misc/NavigatableText"));
const helpers_1 = require("../helpers");
class GridPlaylist extends helpers_1.YTNode {
    constructor(data) {
        var _a;
        super();
        this.id = data.playlistId;
        this.title = new Text_1.default(data.title);
        if (data.shortBylineText) {
            this.author = new PlaylistAuthor_1.default(data.shortBylineText, data.ownerBadges);
        }
        this.badges = index_1.default.parse(data.ownerBadges);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.view_playlist = new NavigatableText_1.default(data.viewPlaylistText);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.thumbnail_renderer = index_1.default.parse(data.thumbnailRenderer);
        this.sidebar_thumbnails = [].concat(...((_a = data.sidebarThumbnails) === null || _a === void 0 ? void 0 : _a.map((thumbnail) => Thumbnail_1.default.fromResponse(thumbnail))) || []) || null;
        this.video_count = new Text_1.default(data.thumbnailText);
        this.video_count_short = new Text_1.default(data.videoCountShortText);
    }
}
GridPlaylist.type = 'GridPlaylist';
exports.default = GridPlaylist;
//# sourceMappingURL=GridPlaylist.js.map