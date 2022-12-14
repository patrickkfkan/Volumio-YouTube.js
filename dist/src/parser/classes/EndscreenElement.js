"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const Text_1 = __importDefault(require("./misc/Text"));
const helpers_1 = require("../helpers");
class EndscreenElement extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.style = `${data.style}`;
        this.title = new Text_1.default(data.title);
        this.endpoint = new NavigationEndpoint_1.default(data.endpoint);
        if (data.image) {
            this.image = Thumbnail_1.default.fromResponse(data.image);
        }
        if (data.icon) {
            this.icon = Thumbnail_1.default.fromResponse(data.icon);
        }
        if (data.metadata) {
            this.metadata = new Text_1.default(data.metadata);
        }
        if (data.callToAction) {
            this.call_to_action = new Text_1.default(data.callToAction);
        }
        if (data.hovercardButton) {
            this.hovercard_button = index_1.default.parseItem(data.hovercardButton);
        }
        if (data.isSubscribe) {
            this.is_subscribe = !!data.isSubscribe;
        }
        if (data.playlistLength) {
            this.playlist_length = new Text_1.default(data.playlistLength);
        }
        this.thumbnail_overlays = data.thumbnailOverlays ? index_1.default.parseArray(data.thumbnailOverlays) : undefined;
        this.left = parseFloat(data.left);
        this.width = parseFloat(data.width);
        this.top = parseFloat(data.top);
        this.aspect_ratio = parseFloat(data.aspectRatio);
        this.start_ms = parseFloat(data.startMs);
        this.end_ms = parseFloat(data.endMs);
        this.id = data.id;
    }
}
EndscreenElement.type = 'EndscreenElement';
exports.default = EndscreenElement;
//# sourceMappingURL=EndscreenElement.js.map