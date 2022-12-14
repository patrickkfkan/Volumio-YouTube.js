"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Text_1 = __importDefault(require("./misc/Text"));
const Author_1 = __importDefault(require("./misc/Author"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const Button_1 = __importDefault(require("./Button"));
const helpers_1 = require("../helpers");
class PlayerOverlayAutoplay extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.title);
        this.video_id = data.videoId;
        this.video_title = new Text_1.default(data.videoTitle);
        this.short_view_count = new Text_1.default(data.shortViewCountText);
        this.prefer_immediate_redirect = data.preferImmediateRedirect;
        this.count_down_secs_for_fullscreen = data.countDownSecsForFullscreen;
        this.published = new Text_1.default(data.publishedTimeText);
        this.background = Thumbnail_1.default.fromResponse(data.background);
        this.thumbnail_overlays = index_1.default.parse(data.thumbnailOverlays);
        this.author = new Author_1.default(data.byline);
        this.cancel_button = index_1.default.parseItem(data.cancelButton, Button_1.default);
        this.next_button = index_1.default.parseItem(data.nextButton, Button_1.default);
        this.close_button = index_1.default.parseItem(data.closeButton, Button_1.default);
    }
}
PlayerOverlayAutoplay.type = 'PlayerOverlayAutoplay';
exports.default = PlayerOverlayAutoplay;
//# sourceMappingURL=PlayerOverlayAutoplay.js.map