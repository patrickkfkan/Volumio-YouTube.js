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
const helpers_1 = require("../helpers");
class EndScreenVideo extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text_1.default(data.title);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.thumbnail_overlays = index_1.default.parse(data.thumbnailOverlays);
        this.author = new Author_1.default(data.shortBylineText, data.ownerBadges);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.short_view_count = new Text_1.default(data.shortViewCountText);
        this.badges = index_1.default.parse(data.badges);
        this.duration = {
            text: new Text_1.default(data.lengthText).toString(),
            seconds: data.lengthInSeconds
        };
    }
}
EndScreenVideo.type = 'EndScreenVideo';
exports.default = EndScreenVideo;
//# sourceMappingURL=EndScreenVideo.js.map