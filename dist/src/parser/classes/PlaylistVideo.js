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
const helpers_1 = require("../helpers");
class PlaylistVideo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.index = new Text_1.default(data.index);
        this.title = new Text_1.default(data.title);
        this.author = new PlaylistAuthor_1.default(data.shortBylineText);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.thumbnail_overlays = index_1.default.parse(data.thumbnailOverlays);
        this.set_video_id = data === null || data === void 0 ? void 0 : data.setVideoId;
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.is_playable = data.isPlayable;
        this.menu = index_1.default.parse(data.menu);
        this.duration = {
            text: new Text_1.default(data.lengthText).text,
            seconds: parseInt(data.lengthSeconds)
        };
    }
}
PlaylistVideo.type = 'PlaylistVideo';
exports.default = PlaylistVideo;
//# sourceMappingURL=PlaylistVideo.js.map