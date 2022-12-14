"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./misc/Text"));
const Thumbnail_1 = __importDefault(require("./misc/Thumbnail"));
const NavigationEndpoint_1 = __importDefault(require("./NavigationEndpoint"));
const helpers_1 = require("../helpers");
class EndScreenPlaylist extends helpers_1.YTNode {
    constructor(data) {
        super();
        this.id = data.playlistId;
        this.title = new Text_1.default(data.title);
        this.author = new Text_1.default(data.longBylineText);
        this.endpoint = new NavigationEndpoint_1.default(data.navigationEndpoint);
        this.thumbnails = Thumbnail_1.default.fromResponse(data.thumbnail);
        this.video_count = new Text_1.default(data.videoCountText);
    }
}
EndScreenPlaylist.type = 'EndScreenPlaylist';
exports.default = EndScreenPlaylist;
//# sourceMappingURL=EndScreenPlaylist.js.map