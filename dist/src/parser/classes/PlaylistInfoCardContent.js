"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class PlaylistInfoCardContent extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.title = new Text_1.default(data.playlistTitle);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.video_count = new Text_1.default(data.playlistVideoCount);
        this.channel_name = new Text_1.default(data.channelName);
        this.endpoint = new NavigationEndpoint_1.default(data.action);
    }
}
PlaylistInfoCardContent.type = 'PlaylistInfoCardContent';
exports.default = PlaylistInfoCardContent;
//# sourceMappingURL=PlaylistInfoCardContent.js.map